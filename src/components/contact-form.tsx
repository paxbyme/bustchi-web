'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/cta-button';

const contactSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 ta harf bo\'lishi kerak'),
  phone: z
    .string()
    .min(7, 'Telefon raqam kiriting')
    .regex(/^[+]?[-()\d\s]{7,20}$/, 'Telefon raqam formati noto\'g\'ri'),
  telegramUsername: z
    .string()
    .trim()
    .optional()
    .transform((v) => v || '')
    .refine((v) => v === '' || /^@?[A-Za-z0-9_]{4,32}$/.test(v), 'Telegram username noto\'g\'ri'),
  message: z.string().min(10, 'Xabar kamida 10 ta belgidan iborat bo\'lsin')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      telegramUsername: '',
      message: ''
    }
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  };

  return (
    <Card className="rounded-2xl bg-card/70 p-5 md:p-6">
      {submitted ? (
        <div className="space-y-4 rounded-xl border border-success/20 bg-success/5 p-4">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle2 className="size-5" />
            <p className="font-medium">Xabaringiz qabul qilindi</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Tez orada javob beramiz. Tezroq aloqa uchun Telegram CTA tugmasidan foydalanishingiz mumkin.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton label="Telegram orqali yozish" />
            <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>
              Yangi xabar yuborish
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Ism
              </label>
              <Input id="name" placeholder="Ismingiz" {...register('name')} />
              {errors.name ? <p className="text-xs text-rose-500">{errors.name.message}</p> : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-muted-foreground">
                Telefon
              </label>
              <Input id="phone" placeholder="+998 ..." {...register('phone')} />
              {errors.phone ? <p className="text-xs text-rose-500">{errors.phone.message}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="telegramUsername" className="text-sm text-muted-foreground">
              Telegram username
            </label>
            <Input id="telegramUsername" placeholder="@username (ixtiyoriy)" {...register('telegramUsername')} />
            {errors.telegramUsername ? (
              <p className="text-xs text-rose-500">{errors.telegramUsername.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Xabar
            </label>
            <Textarea id="message" placeholder="Nima xizmat kerakligi va maqsadingizni yozing..." {...register('message')} />
            {errors.message ? <p className="text-xs text-rose-500">{errors.message.message}</p> : null}
          </div>

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
