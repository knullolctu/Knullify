const CACHE_NAME = "knullify-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./logo.png",
  "./icon-192.png",
  "./icon-512.png"
];

// Install Event - cache core local files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate Event - clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Cache First with network fallback and dynamic caching
self.addEventListener("fetch", (event) => {
  // Only handle HTTP/HTTPS (ignore chrome-extension, data:, etc)
  if (!event.request.url.startsWith("http")) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        // Cache external CDN scripts and fonts on first load
        if (response && response.status === 200 && (response.type === "basic" || event.request.url.includes("cdnjs.cloudflare.com") || event.request.url.includes("jsdelivr.net") || event.request.url.includes("googleapis.com") || event.request.url.includes("gstatic.com"))) {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseCopy);
          });
        }
        return response;
      });
    })
  );
});
