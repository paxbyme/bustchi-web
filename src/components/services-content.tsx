'use client';

import { TrendingUp } from 'lucide-react';
import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { ServiceCard } from '@/components/service-card';
import { CTAButton } from '@/components/cta-button';
import { Card } from '@/components/ui/card';
import type { ServiceItem } from '@/data/services';

export function ServicesContent() {
  const m = useMessages();

  const boostService: ServiceItem = {
    id: 'boost',
    name: m.services.boost.name,
    icon: TrendingUp,
    description: m.services.boost.description,
    forWho: m.services.boost.forWhoItems,
    included: m.services.boost.includedItems,
    outcomes: m.services.boost.outcomeItems
  };

  return (
    <>
      <PageIntro
        badge={m.services.badge}
        title={m.services.introTitle}
        description={m.services.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container grid gap-5">
          <ServiceCard service={boostService} />
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container">
          <Card className="rounded-2xl bg-card/70 p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">{m.services.helpTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              {m.services.helpDescription}
            </p>
            <div className="mt-5">
              <CTAButton size="lg" />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
