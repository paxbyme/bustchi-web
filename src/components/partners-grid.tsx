'use client';

import { useMemo, useState } from 'react';
import { partnerCategories, partners, type PartnerCategory } from '@/data/partners';
import { PartnerCard } from '@/components/partner-card';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';
import { useMessages } from '@/i18n/context';

interface PartnersGridProps {
  previewCount?: number;
  showFilters?: boolean;
  marquee?: boolean;
}

export function PartnersGrid({ previewCount, showFilters = false, marquee = false }: PartnersGridProps) {
  const m = useMessages();

  const categoryLabels: Record<PartnerCategory | 'All', string> = {
    All: m.partners.categories.all,
    Expert: m.partners.categories.expert,
    Academy: m.partners.categories.academy,
    Business: m.partners.categories.business,
    Travel: m.partners.categories.travel,
    Education: m.partners.categories.education
  };

  const [category, setCategory] = useState<PartnerCategory | 'All'>('All');

  const filtered = useMemo(() => {
    const base = category === 'All' ? partners : partners.filter((partner) => partner.category === category);
    return typeof previewCount === 'number' ? base.slice(0, previewCount) : base;
  }, [category, previewCount]);

  if (marquee) {
    return (
      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {[...filtered, ...filtered].map((partner, i) => (
            <div key={`${partner.id}-${i}`} className="w-[280px] shrink-0">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {showFilters ? (
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {partnerCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-sm transition-all duration-200 active:scale-95',
                  category === item
                    ? 'border-primary/30 bg-primary/10 text-primary shadow-soft'
                    : 'border-border bg-card hover:-translate-y-0.5 hover:border-primary/30 hover:bg-muted'
                )}
              >
                {categoryLabels[item]}
              </button>
            ))}
          </div>
        </Reveal>
      ) : null}

      <div
        key={category}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((partner, i) => (
          <Reveal
            key={`${category}-${partner.id}`}
            delay={Math.min(i * 50, 600)}
            className="h-full"
          >
            <PartnerCard partner={partner} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
