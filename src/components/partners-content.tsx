'use client';

import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { PartnersGrid } from '@/components/partners-grid';
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
          <PartnersGrid showFilters />
        </div>
      </section>
    </>
  );
}
