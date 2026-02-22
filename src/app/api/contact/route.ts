import { NextRequest, NextResponse } from 'next/server';
import {
  contactSubmissionSchema,
  formatContactNotification,
  type ContactSubmissionValues
} from '@/lib/contact';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalRateLimitStore = globalThis as typeof globalThis & {
  __contactRateLimitStore?: Map<string, RateLimitEntry>;
};

const rateLimitStore = globalRateLimitStore.__contactRateLimitStore ?? new Map<string, RateLimitEntry>();
globalRateLimitStore.__contactRateLimitStore = rateLimitStore;

function getEnvInt(name: string, fallback: number) {
  const value = process.env[name];
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;

  return 'unknown';
}

function applyRateLimit(ip: string) {
  const maxRequests = getEnvInt('CONTACT_RATE_LIMIT_MAX', 5);
  const windowMs = getEnvInt('CONTACT_RATE_LIMIT_WINDOW_MS', 10 * 60 * 1000);
  const now = Date.now();

  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const key = ip || 'unknown';
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + windowMs
    });

    return {
      limited: false,
      remaining: maxRequests - 1,
      resetAt: now + windowMs
    };
  }

  if (current.count >= maxRequests) {
    return {
      limited: true,
      remaining: 0,
      resetAt: current.resetAt
    };
  }

  current.count += 1;
  rateLimitStore.set(key, current);

  return {
    limited: false,
    remaining: Math.max(0, maxRequests - current.count),
    resetAt: current.resetAt
  };
}

function rateLimitHeaders(rate: { remaining: number; resetAt: number }) {
  return {
    'X-RateLimit-Remaining': String(rate.remaining),
    'X-RateLimit-Reset': String(Math.floor(rate.resetAt / 1000))
  };
}

async function deliverToWebhook(webhookUrl: string, body: Record<string, unknown>) {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed (${response.status})`);
  }
}

async function deliverToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    throw new Error('Telegram delivery is not configured');
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    throw new Error(`Telegram delivery failed (${response.status})`);
  }
}

async function deliverContactLead({
  requestId,
  ip,
  userAgent,
  payload
}: {
  requestId: string;
  ip: string;
  userAgent?: string;
  payload: ContactSubmissionValues;
}) {
  const notificationText = formatContactNotification({ payload, ip, userAgent, requestId });
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    await deliverToWebhook(webhookUrl, {
      requestId,
      ip,
      userAgent,
      payload,
      receivedAt: new Date().toISOString()
    });
    return;
  }

  await deliverToTelegram(notificationText);
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID();
  const ip = getClientIp(request);
  const rate = applyRateLimit(ip);

  if (rate.limited) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Juda ko\'p urinish bo\'ldi. Iltimos, birozdan keyin qayta urinib ko\'ring.'
      },
      {
        status: 429,
        headers: {
          ...rateLimitHeaders(rate),
          'Retry-After': String(Math.max(1, Math.ceil((rate.resetAt - Date.now()) / 1000)))
        }
      }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'Yuborilgan ma\'lumot JSON formatida emas.'
      },
      {
        status: 400,
        headers: rateLimitHeaders(rate)
      }
    );
  }

  const parsed = contactSubmissionSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Forma ma\'lumotlarida xatolik bor.',
        fieldErrors: parsed.error.flatten().fieldErrors
      },
      {
        status: 400,
        headers: rateLimitHeaders(rate)
      }
    );
  }

  const payload = parsed.data;

  if (payload.website) {
    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: rateLimitHeaders(rate)
      }
    );
  }

  const minSubmitMs = getEnvInt('CONTACT_MIN_SUBMIT_MS', 1200);
  if (payload.startedAt && Date.now() - payload.startedAt < minSubmitMs) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Forma juda tez yuborildi. Iltimos, qayta urinib ko\'ring.'
      },
      {
        status: 400,
        headers: rateLimitHeaders(rate)
      }
    );
  }

  try {
    await deliverContactLead({
      requestId,
      ip,
      userAgent: request.headers.get('user-agent') ?? undefined,
      payload
    });

    return NextResponse.json(
      {
        ok: true,
        requestId
      },
      {
        status: 200,
        headers: rateLimitHeaders(rate)
      }
    );
  } catch (error) {
    console.error('[contact] delivery failed', {
      requestId,
      ip,
      error: error instanceof Error ? error.message : 'unknown error'
    });

    return NextResponse.json(
      {
        ok: false,
        error:
          'Xabar yuborilmadi. Hozircha Telegram orqali bog\'laning yoki birozdan keyin qayta urinib ko\'ring.'
      },
      {
        status: 503,
        headers: rateLimitHeaders(rate)
      }
    );
  }
}
