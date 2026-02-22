import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/pricing',
  '/partners',
  '/faq',
  '/contact',
  '/terms'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/contact' ? 0.9 : 0.7
  }));
}
