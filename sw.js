// A simple Service Worker to satisfy PWA installation requirements
const CACHE_NAME = 'app-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Intercept network requests
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});