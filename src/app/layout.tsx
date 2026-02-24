import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import '@/app/globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/i18n/context';
import { siteConfig } from '@/lib/site';
import { LOCALE_COOKIE, defaultLocale, getMessages, isValidLocale } from '@/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isValidLocale(raw) ? raw : defaultLocale;
  const m = getMessages(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    manifest: '/manifest.webmanifest',
    title: {
      default: m.meta.defaultTitle,
      template: `%s | ${siteConfig.name}`
    },
    description: m.meta.defaultDescription,
    alternates: {
      canonical: siteConfig.url
    },
    openGraph: {
      title: siteConfig.name,
      description: m.meta.defaultDescription,
      type: 'website',
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: locale === 'ru' ? 'ru_RU' : locale === 'en' ? 'en_US' : 'uz_UZ'
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: m.meta.defaultDescription
    }
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="relative min-h-screen">
              <SiteHeader />
              <main>{children}</main>
              <SiteFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
