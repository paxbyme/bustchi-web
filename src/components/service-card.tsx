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
    <Card className="h-full rounded-2xl bg-card/70 p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
        <h3 className="font-display text-xl font-semibold">{service.name}</h3>
      </div>

      <p className="mb-5 text-sm leading-6 text-muted-foreground">{service.description}</p>

      <div className="space-y-4 text-sm">
        <div>
          <p className="mb-2 font-medium">{m.services.boost.forWhoTitle}</p>
          <ul className="space-y-1 text-muted-foreground">
            {service.forWho.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-medium">{m.services.boost.includedTitle}</p>
          <ul className="space-y-1 text-muted-foreground">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-medium">{m.services.boost.outcomesTitle}</p>
          <ul className="space-y-1 text-muted-foreground">
            {service.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
