//install
//activate
//fetch

self.addEventListener("install", event => {
  console.log("Service Worker : Installed !");
  //cache to be created - configure
  event.waitUntil(
    caches.open("MyCache").then(cache => {
      console.log("Service Worker : Caching files !");
      cache.addAll(["Index.html", "About.html"]).then(() => self.skipWaiting());
    }),
  );
});

self.addEventListener("activate", () => {
  console.log("Service Worker : Activated !");
});

self.addEventListener("fetch", event => {
  console.log("Service Worker : Fetching resource !");
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)),
  );
});
