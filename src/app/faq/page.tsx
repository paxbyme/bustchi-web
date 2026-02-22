import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { faqItems } from '@/data/faq';
import { FAQAccordion } from '@/components/faq-accordion';
import { Card } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';

export const metadata: Metadata = createPageMetadata({
  title: 'FAQ',
  description: 'Pikrchi xizmatlari bo\'yicha ko\'p beriladigan savollar: xavfsizlik, timing, natija va narxlar.',
  path: '/faq'
});

export default function FAQPage() {
  return (
    <>
      <PageIntro
        badge="FAQ"
        title="Ko'p beriladigan savollar"
        description="Xizmatlar xavfsizligi, timing, natija va narx hisob-kitobi bo'yicha asosiy savollarga javoblar."
      />

      <section className="section-pad pt-0">
        <div className="container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <FAQAccordion items={faqItems} />

          <Card className="h-fit rounded-2xl bg-card/70 p-5">
            <h2 className="font-display text-xl font-semibold">Hali savol qoldimi?</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Telegram orqali savolingizni yuboring. Xizmat turi, quantity yoki timing bo&apos;yicha aniq javob beramiz.
            </p>
            <div className="mt-4">
              <CTAButton className="w-full" size="lg" />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
