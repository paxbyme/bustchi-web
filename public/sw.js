// No-op service worker — silences 404 and unregisters any stale SW
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
