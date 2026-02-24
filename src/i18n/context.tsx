'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  type Locale,
  type Messages,
  getLocaleFromCookie,
  getMessages,
  setLocaleCookie
} from '@/i18n';

interface LanguageContextValue {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLocale,
  children
}: {
  initialLocale?: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => initialLocale ?? getLocaleFromCookie());

  const messages = useMemo(() => getMessages(locale), [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    setLocaleCookie(next);
    // Update html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
    }
  }, []);

  // Sync html lang on mount
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, messages, setLocale }), [locale, messages, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

export function useMessages(): Messages {
  return useLanguage().messages;
}

export function useLocale(): Locale {
  return useLanguage().locale;
}
