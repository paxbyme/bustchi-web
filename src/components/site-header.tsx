'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getMessages } from '@/i18n';
import { buildTelegramLink } from '@/lib/telegram';

const messages = getMessages('uz');

const navItems = [
  { href: '/', label: messages.nav.home },
  { href: '/services', label: messages.nav.services },
  { href: '/partners', label: messages.nav.partners },
  { href: '/pricing', label: messages.nav.pricing },
  { href: '/about', label: messages.nav.about },
  { href: '/contact', label: messages.nav.contact },
  { href: '/faq', label: messages.nav.faq }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = useMemo(
    () => (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href)),
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-soft">
            P
          </span>
          <div>
            <p className="font-display text-base font-semibold leading-none">Pikrchi</p>
            <p className="text-xs text-muted-foreground">Telegram Growth</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm transition hover:bg-muted',
                isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href={buildTelegramLink()} className="hidden md:block" target="_blank" rel="noreferrer">
            <Button size="sm">{messages.common.contactTelegram}</Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <div className="container space-y-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm',
                  isActive(item.href) ? 'bg-muted text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href={buildTelegramLink()} onClick={() => setOpen(false)} target="_blank" rel="noreferrer" className="block pt-2">
              <Button className="w-full">{messages.common.contactTelegram}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
