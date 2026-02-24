import type { Messages } from './types';
import { uzMessages } from './messages/uz';
import { enMessages } from './messages/en';
import { ruMessages } from './messages/ru';

export type { Messages };

export const locales = ['uz', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uz';

export const LOCALE_COOKIE = 'bustchi-locale';

const dictionaries: Record<Locale, Messages> = {
  uz: uzMessages,
  en: enMessages,
  ru: ruMessages
};

export function getMessages(locale: Locale = defaultLocale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isValidLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

export function getLocaleFromCookie(): Locale {
  if (typeof document === 'undefined') return defaultLocale;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)`));
  const value = match?.[1];
  return isValidLocale(value) ? value : defaultLocale;
}

export function setLocaleCookie(locale: Locale): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}
