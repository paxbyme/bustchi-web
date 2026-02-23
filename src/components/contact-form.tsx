'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/cta-button';
import { contactFormSchema, type ContactFormValues } from '@/lib/contact';

type ContactApiResponse = {
  ok: boolean;
  error?: string;
  requestId?: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

const CONTACT_FORM_FIELD_NAMES = ['name', 'phone', 'telegramUsername', 'message'] as const;
type ContactFormFieldName = (typeof CONTACT_FORM_FIELD_NAMES)[number];

function isContactFormFieldName(value: string): value is ContactFormFieldName {
  return CONTACT_FORM_FIELD_NAMES.includes(value as ContactFormFieldName);
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [startedAt, setStartedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      telegramUsername: '',
      message: ''
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setRequestId(null);
    clearErrors();

    let payload: ContactApiResponse | null = null;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          website: honeypot,
          startedAt
        })
      });

      try {
        payload = (await response.json()) as ContactApiResponse;
      } catch {
        payload = null;
      }

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          for (const [field, messages] of Object.entries(payload.fieldErrors)) {
            const message = messages?.[0];
            if (!message || !isContactFormFieldName(field)) continue;
            setError(field, { type: 'server', message });
          }
        }

        setSubmitError(payload?.error || 'Xabar yuborishda xatolik yuz berdi. Qayta urinib ko\'ring.');
        return;
      }

      setSubmitted(true);
      setRequestId(payload.requestId ?? null);
      reset();
      setHoneypot('');
      setStartedAt(Date.now());
    } catch {
      setSubmitError('Tarmoq xatosi. Internetni tekshirib, qayta urinib ko\'ring.');
    }
  };

  return (
    <Card className="rounded-2xl bg-card/70 p-5 md:p-6">
      {submitted ? (
        <div className="space-y-4 rounded-xl border border-success/20 bg-success/5 p-4" role="status" aria-live="polite">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle2 className="size-5" />
            <p className="font-medium">Xabaringiz qabul qilindi</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Tez orada javob beramiz. Tezroq aloqa uchun Telegram CTA tugmasidan foydalanishingiz mumkin.
          </p>
          {requestId ? (
            <p className="text-xs text-muted-foreground">
              So&apos;rov ID: <span className="font-mono">{requestId}</span>
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <CTAButton label="Telegram orqali yozish" />
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setSubmitError(null);
                setRequestId(null);
                setStartedAt(Date.now());
              }}
            >
              Yangi xabar yuborish
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Ism
              </label>
              <Input
                id="name"
                placeholder="Ismingiz"
                autoComplete="name"
                disabled={isSubmitting}
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name')}
              />
              {errors.name ? <p className="text-xs text-rose-500">{errors.name.message}</p> : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-muted-foreground">
                Telefon
              </label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+998 ..."
                disabled={isSubmitting}
                aria-invalid={errors.phone ? 'true' : 'false'}
                {...register('phone')}
              />
              {errors.phone ? <p className="text-xs text-rose-500">{errors.phone.message}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="telegramUsername" className="text-sm text-muted-foreground">
              Telegram username
            </label>
            <Input
              id="telegramUsername"
              autoComplete="off"
              placeholder="@username (ixtiyoriy)"
              disabled={isSubmitting}
              aria-invalid={errors.telegramUsername ? 'true' : 'false'}
              {...register('telegramUsername')}
            />
            {errors.telegramUsername ? (
              <p className="text-xs text-rose-500">{errors.telegramUsername.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Xabar
            </label>
            <Textarea
              id="message"
              placeholder="Nima xizmat kerakligi va maqsadingizni yozing..."
              disabled={isSubmitting}
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message')}
            />
            {errors.message ? <p className="text-xs text-rose-500">{errors.message.message}</p> : null}
          </div>

          {submitError ? (
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-3" role="alert" aria-live="polite">
              <p className="text-sm text-rose-600 dark:text-rose-400">{submitError}</p>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" size="lg" disabled={isSubmitting} className="sm:min-w-44">
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Yuborilmoqda...
                </>
              ) : (
                'Xabar yuborish'
              )}
            </Button>
            <CTAButton variant="outline" size="lg" label="Telegram orqali bog'lanish" />
          </div>
        </form>
      )}
    </Card>
  );
}
