'use client';

import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { PartnersGrid } from '@/components/partners-grid';
import { Card } from '@/components/ui/card';

export function PartnersContent() {
  const m = useMessages();

  return (
    <>
      <PageIntro
        badge={m.partners.badge}
        title={m.partners.introTitle}
        description={m.partners.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container space-y-5">
          <Card className="rounded-2xl bg-card/70 p-4 text-sm text-muted-foreground">
            {m.partners.placeholderNote}
          </Card>
          <PartnersGrid showFilters />
        </div>
      </section>
    </>
  );
}
