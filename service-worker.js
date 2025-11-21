self.addEventListener('install', () => {
  console.log('Service Worker installed for Beam Earn');
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
});
