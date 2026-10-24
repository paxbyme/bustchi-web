'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Partner, PartnerCategory } from '@/data/partners';
import { useMessages } from '@/i18n/context';

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function gradientById(id: string) {
  const gradients = [
    'from-sky-500 to-cyan-400',
    'from-emerald-500 to-teal-400',
    'from-blue-600 to-indigo-500',
    'from-rose-500 to-orange-400',
    'from-fuchsia-500 to-violet-500'
  ];
  const index = id.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % gradients.length;
  return gradients[index];
}

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const m = useMessages();

  const categoryLabels: Record<PartnerCategory, string> = {
    Expert: m.partners.categories.expert,
    Academy: m.partners.categories.academy,
    Business: m.partners.categories.business,
    Travel: m.partners.categories.travel,
    Education: m.partners.categories.education
  };

  const initials = getInitials(partner.name);
  const imagePath = partner.image ? `/partners/${partner.image}` : null;

  const inner = (
    <div className="relative flex items-start gap-3">
      {imagePath ? (
        <div className="relative">
          <Image
            src={imagePath}
            alt={partner.name}
            width={52}
            height={52}
            className="h-[52px] w-[52px] rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-2 ring-primary/40 transition duration-500 group-hover:opacity-100"
          />
        </div>
      ) : (
        <div
          className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gradient-to-br ${gradientById(
            partner.id
          )} text-sm font-bold text-white shadow-soft transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3`}
          aria-hidden="true"
        >
          {initials}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {partner.name}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{partner.title}</p>
        <p className="mt-2 inline-flex rounded-full bg-muted px-2 py-1 text-[11px] text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
          {categoryLabels[partner.category]}
        </p>
      </div>
    </div>
  );

  const cardClasses =
    'group hover-lift relative h-full overflow-hidden rounded-2xl bg-card/70 p-4';

  const glow = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.18), transparent 60%)'
      }}
    />
  );

  if (partner.telegram) {
    return (
      <a
        href={partner.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${partner.name} Telegram`}
        className="block no-underline text-inherit"
      >
        <Card className={cardClasses}>
          {glow}
          {inner}
        </Card>
      </a>
    );
  }

  return (
    <Card className={cardClasses}>
      {glow}
      {inner}
    </Card>
  );
}
