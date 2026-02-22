import { uzMessages } from '@/i18n/messages/uz';
import { enMessages } from '@/i18n/messages/en';
import { ruMessages } from '@/i18n/messages/ru';

export const locales = ['uz', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uz';

const dictionaries = {
  uz: uzMessages,
  en: enMessages,
  ru: ruMessages
} as const;

export function getMessages(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}
