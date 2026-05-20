'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { buildTelegramLink } from '@/lib/telegram';
import { cn } from '@/lib/utils';
import { useMessages } from '@/i18n/context';

interface CTAButtonProps {
  message?: string;
  label?: string;
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function CTAButton({
  message,
  label,
  className,
  variant = 'default',
  size = 'md',
  fullWidth = false
}: CTAButtonProps) {
  const m = useMessages();
  const effectiveLabel = label ?? m.common.contactTelegram;

  return (
    <Link
      href={buildTelegramLink(message)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        buttonVariants({ variant, size }),
        'group relative overflow-hidden',
        fullWidth && 'w-full',
        className
      )}
    >
      <Send className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12" />
      {effectiveLabel}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    </Link>
  );
}
