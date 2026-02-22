import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Partner, PartnerCategory } from '@/data/partners';

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

const categoryLabels: Record<PartnerCategory, string> = {
  Expert: 'Ekspert',
  Academy: 'Akademiya',
  Business: 'Biznes',
  Travel: 'Sayohat'
};

export function PartnerCard({ partner }: PartnerCardProps) {
  const initials = getInitials(partner.name);
  const imagePath = partner.image ? `/partners/${partner.image}` : null;

  return (
    <Card className="group h-full rounded-2xl bg-card/70 p-4 transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start gap-3">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={partner.name}
            width={52}
            height={52}
            className="h-[52px] w-[52px] rounded-xl object-cover"
          />
        ) : (
          <div
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gradient-to-br ${gradientById(
              partner.id
            )} text-sm font-bold text-white shadow-soft`}
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{partner.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{partner.title}</p>
          <p className="mt-2 inline-flex rounded-full bg-muted px-2 py-1 text-[11px] text-muted-foreground">
            {categoryLabels[partner.category]}
          </p>
        </div>
      </div>
    </Card>
  );
}
