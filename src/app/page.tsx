import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { LOCALE_COOKIE, defaultLocale, getMessages, isValidLocale } from '@/i18n';
import { createPageMetadata } from '@/lib/metadata';
import { HomeContent } from '@/components/home-content';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isValidLocale(raw) ? raw : defaultLocale;
  const m = getMessages(locale);

  return createPageMetadata({
    title: m.meta.homeTitle,
    description: m.meta.homeDescription,
    path: '/'
  });
}

export default function HomePage() {
  return <HomeContent />;
}
