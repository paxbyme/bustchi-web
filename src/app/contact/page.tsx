import type { Metadata } from 'next';
import { MessageCircleMore, Send, ShieldCheck } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { ContactForm } from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';

export const metadata: Metadata = createPageMetadata({
  title: 'Aloqa',
  description: 'Bustchi bilan bog\'lanish uchun forma va Telegram CTA.',
  path: '/contact'
});

const contactPoints = [
  {
    icon: Send,
    title: 'Telegram - asosiy kanal',
    description: 'Eng tezkor aloqa uchun Telegram CTA tugmalaridan foydalaning.'
  },
  {
    icon: MessageCircleMore,
    title: 'Savol va konsultatsiya',
    description: 'Qaysi xizmat mosligini bilmasangiz, maqsadingizni yozing - tavsiya beramiz.'
  },
  {
    icon: ShieldCheck,
    title: 'Shaffof jarayon',
    description: 'Narx, timing va jarayon bosqichlari oldindan kelishiladi.'
  }
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        badge="Aloqa"
        title="Bustchi bilan bog'lanish"
        description="Forma orqali so'rov yuboring yoki to'g'ridan-to'g'ri Telegramga yozing. Maqsadimiz: tez javob, aniq narx va tushunarli jarayon."
      />

      <section className="section-pad pt-0">
        <div className="container grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />

          <div className="space-y-4">
            {contactPoints.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-2xl bg-card/70 p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
            <Card className="rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5">
              <p className="text-sm font-medium">Tezkor CTA</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Agar buyurtma tafsilotlari tayyor bo&apos;lsa, narx kalkulyatoridan xabar yaratib Telegramga yuboring.
              </p>
              <div className="mt-4">
                <CTAButton size="lg" className="w-full" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
