self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("espiro-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js"
      ]);
    })
  );
});
