import type { Messages } from './types';
import { uzMessages } from './messages/uz';

export type { Messages };

export const locales = ['uz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uz';

export const LOCALE_COOKIE = 'bustchi-locale';

const dictionaries: Record<Locale, Messages> = {
  uz: uzMessages
};

export function getMessages(locale: Locale = defaultLocale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isValidLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

export function getLocaleFromCookie(): Locale {
  return defaultLocale;
}

export function setLocaleCookie(locale: Locale): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}
