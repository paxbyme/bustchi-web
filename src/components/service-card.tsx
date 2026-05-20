'use client';

import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { ServiceItem } from '@/data/services';
import { useMessages } from '@/i18n/context';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const m = useMessages();
  const Icon = service.icon;

  return (
    <Card className="hover-lift group relative h-full overflow-hidden rounded-2xl bg-card/70 p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl transition duration-700 group-hover:bg-primary/20"
      />
      <div className="relative mb-5 flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="size-5" />
        </span>
        <h3 className="font-display text-xl font-semibold">{service.name}</h3>
      </div>

      <p className="relative mb-5 text-sm leading-6 text-muted-foreground">{service.description}</p>

      <div className="relative space-y-4 text-sm">
        <div>
          <p className="mb-2 font-medium">{m.services.boost.forWhoTitle}</p>
          <ul className="space-y-1 text-muted-foreground">
            {service.forWho.map((item, i) => (
              <li
                key={item}
                style={{ animationDelay: `${i * 60}ms` }}
                className="flex items-start gap-2 motion-safe:animate-fade-up"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-medium">{m.services.boost.includedTitle}</p>
          <ul className="space-y-1 text-muted-foreground">
            {service.included.map((item, i) => (
              <li
                key={item}
                style={{ animationDelay: `${i * 60 + 60}ms` }}
                className="flex items-start gap-2 motion-safe:animate-fade-up"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-medium">{m.services.boost.outcomesTitle}</p>
          <ul className="space-y-1 text-muted-foreground">
            {service.outcomes.map((item, i) => (
              <li
                key={item}
                style={{ animationDelay: `${i * 60 + 120}ms` }}
                className="flex items-start gap-2 motion-safe:animate-fade-up"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
