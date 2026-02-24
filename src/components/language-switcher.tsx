'use client';

import { useLanguage } from '@/i18n/context';
import { locales, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';

const localeLabels: Record<Locale, string> = {
  uz: 'UZ',
  en: 'EN',
  ru: 'RU'
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-card/80 p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLocale(loc)}
          className={cn(
            'rounded-md px-2 py-1 text-xs font-medium transition',
            locale === loc
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          )}
          aria-label={localeLabels[loc]}
          aria-current={locale === loc ? 'true' : undefined}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
