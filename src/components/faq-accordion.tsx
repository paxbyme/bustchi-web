'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faq';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <Card key={item.id} className="overflow-hidden rounded-2xl bg-card/70">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
            >
              <span className="text-sm font-medium sm:text-base">{item.question}</span>
              <ChevronDown className={cn('size-4 text-muted-foreground transition', isOpen && 'rotate-180')} />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              className={cn(
                'grid transition-all duration-200',
                isOpen ? 'grid-rows-[1fr] border-t border-border/70' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 py-4 text-sm leading-6 text-muted-foreground sm:px-5">{item.answer}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
