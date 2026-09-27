const CACHE = 'learning-games-v10';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll([
    './index.html',
    './multiply.html',
    './red-words.html',
    './place-value.html',
    './pipeline.html',
    './pipeline-voice.js',
    './shape-builder.html',
    './word-builder.html'
  ])));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  clients.claim();
});

self.addEventListener('fetch', e => {
  // Voice clips are network-first so new recordings reach the iPad on the
  // next online launch without needing a cache version bump
  if (new URL(e.request.url).pathname.endsWith('/pipeline-voice.js')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
