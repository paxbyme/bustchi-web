import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bustchi',
    short_name: 'Bustchi',
    description: 'Telegram BOOST xizmati uchun marketing platforma',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0b1220',
    theme_color: '#16a34a'
  };
}
