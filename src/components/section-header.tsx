import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ badge, title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center', className)}>
      {badge ? <Badge className="border-primary/20 bg-primary/[0.08] text-primary">{badge}</Badge> : null}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p className={cn('max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
