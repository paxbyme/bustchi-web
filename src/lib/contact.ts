import { z } from 'zod';

const PHONE_REGEX = /^[+]?[-()\d\s]{7,20}$/;
const TELEGRAM_USERNAME_REGEX = /^@?[A-Za-z0-9_]{4,32}$/;

const normalizedOptionalTelegramUsername = z
  .string()
  .trim()
  .max(33, 'Telegram username juda uzun')
  .optional()
  .or(z.literal(''))
  .transform((value) => value ?? '')
  .refine(
    (value) => value === '' || TELEGRAM_USERNAME_REGEX.test(value),
    'Telegram username noto\'g\'ri'
  )
  .transform((value) => (value && !value.startsWith('@') ? `@${value}` : value));

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Ism kamida 2 ta harf bo\'lishi kerak')
    .max(80, 'Ism juda uzun'),
  phone: z
    .string()
    .trim()
    .min(7, 'Telefon raqam kiriting')
    .max(20, 'Telefon raqam juda uzun')
    .regex(PHONE_REGEX, 'Telefon raqam formati noto\'g\'ri'),
  telegramUsername: normalizedOptionalTelegramUsername,
  message: z
    .string()
    .trim()
    .min(10, 'Xabar kamida 10 ta belgidan iborat bo\'lsin')
    .max(2000, 'Xabar juda uzun')
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const startedAtSchema = z.preprocess(
  (value) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.trim() !== '') {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : value;
    }
    return undefined;
  },
  z.number().int().positive().optional()
);

export const contactSubmissionSchema = contactFormSchema.extend({
  website: z
    .string()
    .trim()
    .max(255, 'Website maydoni juda uzun')
    .optional()
    .or(z.literal(''))
    .transform((value) => value ?? ''),
  startedAt: startedAtSchema
});

export type ContactSubmissionValues = z.infer<typeof contactSubmissionSchema>;

export function formatContactNotification({
  payload,
  ip,
  userAgent,
  requestId
}: {
  payload: ContactSubmissionValues;
  ip: string;
  userAgent?: string;
  requestId: string;
}) {
  const submittedAt = new Date().toISOString();

  return [
    'New contact form lead',
    '',
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Telegram: ${payload.telegramUsername || 'not provided'}`,
    '',
    'Message:',
    payload.message,
    '',
    `Request ID: ${requestId}`,
    `IP: ${ip}`,
    `User-Agent: ${userAgent || 'unknown'}`,
    `Submitted at: ${submittedAt}`
  ].join('\n');
}
