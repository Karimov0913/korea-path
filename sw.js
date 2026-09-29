// Network-first Service Worker: новые версии появляются без ручного обновления.
const CACHE='korea-path-v5';
const CORE=['./','./index.html','./css/style.css','./js/data.js','./js/calculator.js','./js/map.js','./js/app.js','./assets/icons/logo.svg'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)))});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  await Promise.all((await caches.keys()).filter(key=>key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
  const windows=await self.clients.matchAll({type:'window'});
  await Promise.all(windows.map(client=>client.navigate(client.url)));
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin===self.location.origin){
    event.respondWith(fetch(event.request).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}
      return response;
    }).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response})));
});
