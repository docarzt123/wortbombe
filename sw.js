const CACHE = "wortbombe-v3";
const DATEIEN = [".", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

// Beim Installieren möglichst alles cachen. Ein Fehlschlag einzelner Dateien
// bricht die Installation NICHT ab (best effort).
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      Promise.all(DATEIEN.map((url) =>
        fetch(url, { cache: "reload" })
          .then((r) => (r && r.ok ? c.put(url, r) : null))
          .catch(() => null)
      ))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first mit selbstheilendem Laufzeit-Cache + Offline-Fallback auf die App.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            const kopie = res.clone();
            caches.open(CACHE).then((c) => c.put(req, kopie));
          }
          return res;
        })
        .catch(() =>
          req.mode === "navigate"
            ? caches.match("index.html", { ignoreSearch: true }).then((r) => r || caches.match("./", { ignoreSearch: true }))
            : undefined
        );
    })
  );
});
