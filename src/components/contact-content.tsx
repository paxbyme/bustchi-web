'use client';

import { MessageCircleMore, Send, ShieldCheck } from 'lucide-react';
import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { ContactForm } from '@/components/contact-form';
import { Card } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';

const pointIcons = [Send, MessageCircleMore, ShieldCheck] as const;
const pointKeys = ['telegram', 'consultation', 'transparent'] as const;

export function ContactContent() {
  const m = useMessages();

  return (
    <>
      <PageIntro
        badge={m.contact.badge}
        title={m.contact.introTitle}
        description={m.contact.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />
          <div className="space-y-4">
            {pointKeys.map((key, i) => {
              const Icon = pointIcons[i];
              const point = m.contact.points[key];
              return (
                <Card key={key} className="rounded-2xl bg-card/70 p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-medium">{point.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
            <Card className="rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5">
              <p className="text-sm font-medium">{m.contact.quickCta.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{m.contact.quickCta.description}</p>
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
