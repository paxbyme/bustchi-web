'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMessages } from '@/i18n/context';
import { buildTelegramLink } from '@/lib/telegram';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const m = useMessages();

  const navItems = useMemo(
    () => [
      { href: '/', label: m.nav.home },
      { href: '/services', label: m.nav.services },
      { href: '/partners', label: m.nav.partners },
      { href: '/about', label: m.nav.about },
      { href: '/faq', label: m.nav.faq }
    ],
    [m]
  );

  const isActive = useMemo(
    () => (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href)),
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl motion-safe:animate-slide-down">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="group flex items-center gap-2 transition"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Bustchi"
            width={36}
            height={36}
            className="size-9 transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110"
          />
          <div>
            <p className="font-display text-base font-semibold leading-none">{m.common.brand}</p>
            <p className="text-xs text-muted-foreground">{m.common.telegramGrowth}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className={cn(
                'nav-underline rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:text-foreground',
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
            <Button size="sm" className="motion-safe:animate-pulse-glow">
              {m.common.contactTelegram}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="relative inline-flex size-4 items-center justify-center">
              <Menu
                className={cn(
                  'absolute size-4 transition-all duration-300',
                  open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                )}
              />
              <X
                className={cn(
                  'absolute size-4 transition-all duration-300',
                  open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                )}
              />
            </span>
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden motion-safe:animate-slide-down">
          <div className="container space-y-1 py-3">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors motion-safe:animate-fade-up',
                  isActive(item.href) ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/60'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={buildTelegramLink()}
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noreferrer"
              className="block pt-2"
            >
              <Button className="w-full">{m.common.contactTelegram}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
