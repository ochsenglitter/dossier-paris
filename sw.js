/* DOSSIER PARIS – Offline-Betrieb.

   Vorher wurde zuerst im Zwischenspeicher nachgesehen und nur bei einem Treffer
   nicht nachgeladen. Ergebnis: Wer die App einmal geoeffnet hatte, bekam neue
   Inhalte tagelang nicht zu sehen – der Eilauftrag mit den Testvokabeln tauchte
   auf dem Handy gar nicht erst auf.

   Jetzt umgekehrt: erst das Netz fragen, und nur wenn es nicht antwortet (oder
   zu lange braucht), den Zwischenspeicher nehmen. Die App ist klein genug,
   dass das nicht auffaellt, und offline funktioniert sie weiterhin. */

const CACHE = "dossier-paris-v5";
const NETZ_TIMEOUT = 2500;

const DATEIEN = [
  "./", "./index.html", "./manifest.webmanifest", "./img/icon.svg",
  "./css/style.css",
  "./js/core.js", "./js/items.js", "./js/audio.js", "./js/session.js", "./js/app.js",
  "./js/data/s1.js", "./js/data/s2.js", "./js/data/s3.js", "./js/data/s4.js",
  "./js/data/s5.js", "./js/data/story.js", "./js/data/eilauftrag.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(DATEIEN))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))
      .then(() => self.clients.claim())
  );
});

function ausDemNetz(request) {
  return new Promise((erfuellen, ablehnen) => {
    let fertig = false;
    const uhr = setTimeout(() => { if (!fertig) ablehnen(new Error("zu langsam")); }, NETZ_TIMEOUT);
    fetch(request).then(antwort => {
      fertig = true; clearTimeout(uhr);
      if (antwort && antwort.ok) {
        const kopie = antwort.clone();
        caches.open(CACHE).then(c => c.put(request, kopie)).catch(() => {});
      }
      erfuellen(antwort);
    }).catch(fehler => { fertig = true; clearTimeout(uhr); ablehnen(fehler); });
  });
}

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;      /* Schriften normal laden */

  e.respondWith(
    ausDemNetz(e.request).catch(() =>
      caches.match(e.request).then(treffer =>
        treffer || (e.request.mode === "navigate" ? caches.match("./index.html") : Promise.reject())
      )
    )
  );
});
