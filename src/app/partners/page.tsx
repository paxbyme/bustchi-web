import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { LOCALE_COOKIE, defaultLocale, getMessages, isValidLocale } from '@/i18n';
import { createPageMetadata } from '@/lib/metadata';
import { PartnersContent } from '@/components/partners-content';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isValidLocale(raw) ? raw : defaultLocale;
  const m = getMessages(locale);

  return createPageMetadata({
    title: m.meta.partnersTitle,
    description: m.meta.partnersDescription,
    path: '/partners'
  });
}

export default function PartnersPage() {
  return <PartnersContent />;
}
