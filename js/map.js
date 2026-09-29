// Инициализация Leaflet. При отсутствии CDN остаётся доступен текстовый список точек.
(() => {
  const list=document.getElementById('mapList');
  const points=window.KOREA_DATA.points;
  list.innerHTML=points.map(p=>`<li><strong>${p.n}</strong><span>${p.c} · ${p.city}</span><small>${p.a}</small></li>`).join('');
  if(!window.L){ document.getElementById('map').innerHTML='<div class="map-fallback">Карта недоступна офлайн. Список проверенных ориентиров доступен ниже.</div>'; return; }
  const map=L.map('map',{scrollWheelZoom:false}).setView([36.5,127.8],7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
  const colors={'Мечеть':'#8b6f60','Халяль':'#d8c1af','Больница':'#8b6f60','Банк':'#d8c1af','Университет':'#d8c1af','Общежитие':'#8b6f60'};
  points.forEach(p=>L.circleMarker([p.lat,p.lng],{radius:8,color:'#fff',weight:2,fillColor:colors[p.c]||'#003478',fillOpacity:.95}).bindPopup(`<strong>${p.n}</strong><br>${p.c} · ${p.city}<br><small>${p.a}</small>`).addTo(map));
})();
