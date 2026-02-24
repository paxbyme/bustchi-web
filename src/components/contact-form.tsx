'use client';

import { useState, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/cta-button';
import { type ContactFormValues } from '@/lib/contact';
import { useMessages } from '@/i18n/context';

const PHONE_REGEX = /^[+]?[-()\d\s]{7,20}$/;
const TELEGRAM_USERNAME_REGEX = /^@?[A-Za-z0-9_]{4,32}$/;

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
  const m = useMessages();

  const contactSchema = useMemo(() => {
    const normalizedOptionalTelegramUsername = z
      .string()
      .trim()
      .max(33, m.validation.telegramMax)
      .optional()
      .or(z.literal(''))
      .transform((value) => value ?? '')
      .refine(
        (value) => value === '' || TELEGRAM_USERNAME_REGEX.test(value),
        m.validation.telegramFormat
      )
      .transform((value) => (value && !value.startsWith('@') ? `@${value}` : value));

    return z.object({
      name: z
        .string()
        .trim()
        .min(2, m.validation.nameMin)
        .max(80, m.validation.nameMax),
      phone: z
        .string()
        .trim()
        .min(7, m.validation.phoneMin)
        .max(20, m.validation.phoneMax)
        .regex(PHONE_REGEX, m.validation.phoneFormat),
      telegramUsername: normalizedOptionalTelegramUsername,
      message: z
        .string()
        .trim()
        .min(10, m.validation.messageMin)
        .max(2000, m.validation.messageMax)
    });
  }, [m]);

  // Use a ref so the resolver always validates against the latest locale-aware schema
  // without forcing useForm to re-initialize (which would reset form state).
  const schemaRef = useRef(contactSchema);
  schemaRef.current = contactSchema;

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
    resolver: async (values, context, options) => {
      return zodResolver(schemaRef.current)(values, context, options);
    },
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

        setSubmitError(payload?.error || m.errors.submitFailed);
        return;
      }

      setSubmitted(true);
      setRequestId(payload.requestId ?? null);
      reset();
      setHoneypot('');
      setStartedAt(Date.now());
    } catch {
      setSubmitError(m.errors.networkError);
    }
  };

  return (
    <Card className="rounded-2xl bg-card/70 p-5 md:p-6">
      {submitted ? (
        <div className="space-y-4 rounded-xl border border-success/20 bg-success/5 p-4" role="status" aria-live="polite">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle2 className="size-5" />
            <p className="font-medium">{m.contact.success.title}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {m.contact.success.description}
          </p>
          {requestId ? (
            <p className="text-xs text-muted-foreground">
              {m.contact.success.requestIdLabel} <span className="font-mono">{requestId}</span>
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <CTAButton label={m.contact.success.writeViaTelegram} />
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
              {m.contact.success.sendNewMessage}
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
                {m.contact.form.nameLabel}
              </label>
              <Input
                id="name"
                placeholder={m.contact.form.namePlaceholder}
                autoComplete="name"
                disabled={isSubmitting}
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name')}
              />
              {errors.name ? <p className="text-xs text-rose-500">{errors.name.message}</p> : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-muted-foreground">
                {m.contact.form.phoneLabel}
              </label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={m.contact.form.phonePlaceholder}
                disabled={isSubmitting}
                aria-invalid={errors.phone ? 'true' : 'false'}
                {...register('phone')}
              />
              {errors.phone ? <p className="text-xs text-rose-500">{errors.phone.message}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="telegramUsername" className="text-sm text-muted-foreground">
              {m.contact.form.telegramLabel}
            </label>
            <Input
              id="telegramUsername"
              autoComplete="off"
              placeholder={m.contact.form.telegramPlaceholder}
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
              {m.contact.form.messageLabel}
            </label>
            <Textarea
              id="message"
              placeholder={m.contact.form.messagePlaceholder}
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
                  {m.contact.form.submittingButton}
                </>
              ) : (
                m.contact.form.submitButton
              )}
            </Button>
            <CTAButton variant="outline" size="lg" label={m.contact.form.altCta} />
          </div>
        </form>
      )}
    </Card>
  );
}
