import Link from 'next/link';
import { buildTelegramLink } from '@/lib/telegram';

const footerLinks = [
  { href: '/services', label: 'Xizmatlar' },
  { href: '/partners', label: 'Hamkorlar' },
  { href: '/pricing', label: 'Narxlar' },
  { href: '/faq', label: 'FAQ' },
  { href: '/terms', label: 'Shartlar' }
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border/60 bg-card/60 backdrop-blur">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-display text-xl font-semibold">Bustchi</p>
          <p className="max-w-md text-sm text-muted-foreground">
            Telegram BOOST xizmati orqali ekspertlar, akademiyalar va bizneslar uchun tezkor o&apos;sish infratuzilmasi.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Sahifalar</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Aloqa</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href={buildTelegramLink()} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Telegram: @bustchi
              </Link>
            </li>
            <li>Javob berish vaqti: 09:00 - 22:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground">
          {new Date().getFullYear()} Bustchi. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
