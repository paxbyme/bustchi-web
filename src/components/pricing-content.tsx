'use client';

import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { boostPricing, formatUZS } from '@/config/pricing';
import { PricingCalculator } from '@/components/pricing-calculator';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';

export function PricingContent() {
  const m = useMessages();

  return (
    <>
      <PageIntro
        badge={m.pricing.badge}
        title={m.pricing.introTitle}
        description={m.pricing.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container">
          <PricingCalculator />
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container space-y-8">
          <SectionHeader
            badge={m.pricing.configBadge}
            title={m.pricing.configTitle}
            description={m.pricing.configDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {boostPricing.map((item) => (
              <Card key={item.days} className="rounded-2xl bg-card/70 p-5">
                <p className="text-sm text-muted-foreground">{m.pricing.durationCardLabel}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  {item.days} {item.days === 1 ? m.common.day : m.common.days}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">{m.pricing.unitPriceCardLabel}</p>
                <p className="mt-1 font-display text-xl font-semibold">{formatUZS(item.unitPrice)} {m.common.currency}</p>
                <p className="text-xs text-muted-foreground">{m.pricing.perBoostUnit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
