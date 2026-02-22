import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import '@/app/globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/site';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  manifest: '/manifest.webmanifest',
  title: {
    default: 'Bustchi | Telegram BOOST xizmati',
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: 'Bustchi',
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'uz_UZ'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bustchi',
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
