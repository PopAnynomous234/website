/* /sw.js */
importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux@2.0.4/dist/worker.js');
importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
