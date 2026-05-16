const CACHE_NAME = 'monaguillos-v4';
const urlsToCache = [
  './',
  './index.html',
  './reglas.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './logo.png'
];

// Solo cacheamos peticiones GET del mismo origen
const isCacheableRequest = (request) => {
  return request.method === 'GET' && request.url.startsWith(self.location.origin);
};

self.addEventListener('install', event => {
  // Forzar activación del nuevo SW
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Manejo robusto: si algún recurso falla, no rompe todo el cacheo
        return cache.addAll(urlsToCache).catch(err => {
          console.error('Error al cachear recursos iniciales:', err);
          // Opcional: reintentar recursos individuales que fallaron
          return Promise.allSettled(
            urlsToCache.map(url => cache.add(url).catch(e => console.warn(`No se pudo cachear ${url}`, e)))
          );
        });
      })
  );
});

self.addEventListener('fetch', event => {
  // Solo procesamos peticiones GET del mismo origen
  if (!isCacheableRequest(event.request)) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Estrategia Stale-While-Revalidate mejorada
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          // Solo cacheamos respuestas exitosas y del tipo 'basic' (mismo origen)
          if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(error => {
          console.warn('Fetch falló, usando caché si está disponible:', error);
          // Si no hay caché y es una petición de navegación, mostrar página offline
          if (!cachedResponse && event.request.mode === 'navigate') {
            return caches.match('./offline.html'); // Requiere crear offline.html
          }
          throw error; // Para que se devuelva el error real si no hay caché
        });

      // Devuelve la caché si existe, sino espera la red
      return cachedResponse || fetchPromise;
    })
  );
});

self.addEventListener('activate', event => {
  // Tomar control inmediato de las páginas abiertas
  event.waitUntil(clients.claim());

  // Limpieza de cachés antiguas (solo elimina las que no coinciden exactamente con CACHE_NAME)
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Opcional: escuchar mensajes desde la página principal para forzar limpieza o actualización
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  } else if (event.data === 'clearCache') {
    caches.delete(CACHE_NAME).then(() => {
      console.log('Caché borrada manualmente');
    });
  }
});