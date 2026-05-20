'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faq';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <Reveal key={item.id} delay={i * 60}>
            <Card
              className={cn(
                'group overflow-hidden rounded-2xl bg-card/70 transition-all duration-300',
                isOpen ? 'shadow-lift ring-1 ring-primary/15' : 'hover:-translate-y-0.5 hover:shadow-soft'
              )}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-muted/30 sm:px-5"
                onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
              >
                <span
                  className={cn(
                    'text-sm font-medium transition-colors sm:text-base',
                    isOpen && 'text-primary'
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    'inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                    isOpen ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                  )}
                >
                  <ChevronDown
                    className={cn(
                      'size-4 transition-transform duration-300 ease-out',
                      isOpen && 'rotate-180'
                    )}
                  />
                </span>
              </button>
              {isOpen ? (
                <div
                  id={`faq-panel-${item.id}`}
                  className="border-t border-border/70 px-4 py-4 motion-safe:animate-fade-up sm:px-5"
                >
                  <p className="text-sm leading-6 text-foreground/85">{item.answer}</p>
                </div>
              ) : null}
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
