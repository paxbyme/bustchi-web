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
      className={cn(buttonVariants({ variant, size }), fullWidth && 'w-full', className)}
    >
      <Send className="size-4" />
      {effectiveLabel}
    </Link>
  );
}
