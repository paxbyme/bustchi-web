'use client';

import { useMemo } from 'react';
import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { FAQAccordion } from '@/components/faq-accordion';
import { Card } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';
import type { FAQItem } from '@/data/faq';

export function FAQContent() {
  const m = useMessages();

  const faqItems: FAQItem[] = useMemo(
    () => Object.entries(m.faq.items).map(([id, item]) => ({ id, ...item })),
    [m]
  );

  return (
    <>
      <PageIntro
        badge={m.faq.badge}
        title={m.faq.introTitle}
        description={m.faq.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <FAQAccordion items={faqItems} />
          <Card className="h-fit rounded-2xl bg-card/70 p-5">
            <h2 className="font-display text-xl font-semibold">{m.faq.stillQuestionsTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{m.faq.stillQuestionsDescription}</p>
            <div className="mt-4">
              <CTAButton className="w-full" size="lg" />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
