'use client';

import { useMemo, useState } from 'react';
import { partnerCategories, partners, type PartnerCategory } from '@/data/partners';
import { PartnerCard } from '@/components/partner-card';
import { cn } from '@/lib/utils';
import { useMessages } from '@/i18n/context';

interface PartnersGridProps {
  previewCount?: number;
  showFilters?: boolean;
}

export function PartnersGrid({ previewCount, showFilters = false }: PartnersGridProps) {
  const m = useMessages();

  const categoryLabels: Record<PartnerCategory | 'All', string> = {
    All: m.partners.categories.all,
    Expert: m.partners.categories.expert,
    Academy: m.partners.categories.academy,
    Business: m.partners.categories.business,
    Travel: m.partners.categories.travel
  };

  const [category, setCategory] = useState<PartnerCategory | 'All'>('All');

  const filtered = useMemo(() => {
    const base = category === 'All' ? partners : partners.filter((partner) => partner.category === category);
    return typeof previewCount === 'number' ? base.slice(0, previewCount) : base;
  }, [category, previewCount]);

  return (
    <div className="space-y-5">
      {showFilters ? (
        <div className="flex flex-wrap gap-2">
          {partnerCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-sm transition',
                category === item ? 'border-primary/30 bg-primary/10 text-primary' : 'border-border bg-card hover:bg-muted'
              )}
            >
              {categoryLabels[item]}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}
