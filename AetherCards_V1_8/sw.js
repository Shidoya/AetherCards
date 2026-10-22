/* AetherCards 1.8: static files available offline once installed over HTTPS */
const CACHE_NAME = 'aethercards-v18-static-1';
const FILES = ["./", "./index.html", "./app.js", "./styles.css", "./v18.css", "./manifest.webmanifest", "./assets/booster-waifu.svg", "./assets/card-back-after-dark.svg", "./assets/booster-shadow.svg", "./assets/aether-mark.svg", "./assets/favicon.svg", "./assets/booster-waifu18.svg", "./assets/icon-192.png", "./assets/booster-pirates.svg", "./assets/icon-512.png", "./assets/booster-husbando18.svg", "./assets/booster-husbando.svg", "./assets/booster-astra.svg", "./assets/booster-neon.svg", "./assets/card-back-standard.svg"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('aethercards-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(hit => hit || fetch(request)));
});
