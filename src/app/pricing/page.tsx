import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { boostPricing, formatUZS } from '@/config/pricing';
import { PricingCalculator } from '@/components/pricing-calculator';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';

export const metadata: Metadata = createPageMetadata({
  title: 'Narxlar',
  description: 'Bustchi Telegram BOOST xizmati uchun konfiguratsiya asosidagi narx kalkulyatori.',
  path: '/pricing'
});

export default function PricingPage() {
  return (
    <>
      <PageIntro
        badge="Narxlar"
        title="Boost narx kalkulyatori va muddatlar"
        description="Narxlar `src/config/pricing.ts` dagi BOOST jadvalidan olinadi. Muddatni tanlang, sonni kiriting va jami narxni darhol ko'ring."
      />

      <section className="section-pad pt-0">
        <div className="container">
          <PricingCalculator />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container space-y-8">
          <SectionHeader
            badge="Konfiguratsiya asosida"
            title="BOOST narx jadvali"
            description="Quyidagi qiymatlar kalkulyator ishlatadigan bir xil `boostPricing` konfiguratsiyasidan render qilinadi."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {boostPricing.map((item) => (
              <Card key={item.days} className="rounded-2xl bg-card/70 p-5">
                <p className="text-sm text-muted-foreground">Duration</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  {item.days} {item.days === 1 ? 'day' : 'days'}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">Unit price</p>
                <p className="mt-1 font-display text-xl font-semibold">{formatUZS(item.unitPrice)} UZS</p>
                <p className="text-xs text-muted-foreground">per 1 boost unit</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
