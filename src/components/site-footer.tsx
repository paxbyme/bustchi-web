'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buildTelegramLink } from '@/lib/telegram';
import { useMessages } from '@/i18n/context';
import { Reveal } from '@/components/motion/reveal';

export function SiteFooter() {
  const m = useMessages();

  const footerLinks = useMemo(
    () => [
      { href: '/services', label: m.footer.links.services },
      { href: '/partners', label: m.footer.links.partners },
      { href: '/faq', label: m.footer.links.faq },
      { href: '/terms', label: m.footer.links.terms }
    ],
    [m]
  );

  return (
    <footer className="mt-10 border-t border-border/60 bg-card/60 backdrop-blur">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <Reveal className="space-y-3">
          <div className="group flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Bustchi"
              width={32}
              height={32}
              className="size-8 transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110"
            />
            <p className="font-display text-xl font-semibold">{m.common.brand}</p>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">{m.footer.description}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-3 text-sm font-semibold">{m.footer.pagesTitle}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={220}>
          <p className="mb-3 text-sm font-semibold">{m.footer.contactTitle}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href={buildTelegramLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-foreground"
              >
                <span className="live-dot mr-1" aria-hidden="true" />
                {m.footer.telegramHandle}
              </Link>
            </li>
            <li>{m.footer.responseTime}</li>
          </ul>
        </Reveal>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground">
          {new Date().getFullYear()} {m.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
