import { siteConfig } from '@/lib/site';

export function buildTelegramLink(message?: string) {
  if (!message) return siteConfig.telegramLink;
  return `${siteConfig.telegramLink}?text=${encodeURIComponent(message)}`;
}
