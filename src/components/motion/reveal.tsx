'use client';

import { type CSSProperties, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Entrance animation primitive. Renders with `motion-safe:animate-fade-up` so
 * the animation plays on mount and respects prefers-reduced-motion. There is
 * NO JS-gated hiding — content is always part of the DOM and reaches its
 * final visible state unconditionally, even if scripts never run.
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  style,
  children
}: RevealProps) {
  return (
    <Tag
      className={cn('motion-safe:animate-fade-up', className)}
      style={delay ? { animationDelay: `${delay}ms`, ...style } : style}
    >
      {children}
    </Tag>
  );
}
