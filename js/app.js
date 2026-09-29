// Общая логика приложения: тема, навигация, поиск, чек-лист и UI.
(() => {
  const $=(s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
  const savedTheme=localStorage.getItem('kp-theme-v3')||'light'; document.documentElement.dataset.theme=savedTheme;
  $('#themeToggle').textContent=savedTheme==='dark'?'☀️':'🌙';
  $('#themeToggle').onclick=()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;localStorage.setItem('kp-theme-v3',t);$('#themeToggle').textContent=t==='dark'?'☀️':'🌙'};
  $('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');
  $$('#mainNav a').forEach(a=>a.onclick=()=>$('#mainNav').classList.remove('open'));

  const checks=JSON.parse(localStorage.getItem('kp-checks')||'{}');
  $$('#visaChecklist input').forEach((el,i)=>{el.checked=!!checks[i];el.onchange=()=>{checks[i]=el.checked;localStorage.setItem('kp-checks',JSON.stringify(checks));updateProgress()}});
  function updateProgress(){const all=$$('#visaChecklist input'), done=all.filter(x=>x.checked).length, pct=Math.round(done/all.length*100);$('#progressFill').style.width=pct+'%';$('#progressText').textContent=`${done} из ${all.length} · ${pct}%`;}
  updateProgress();
  $('#printChecklist').onclick=()=>window.print();

  const city=$('#uniCity'), price=$('#uniPrice'), topik=$('#uniTopik');
  [...new Set(KOREA_DATA.universities.map(x=>x.city))].forEach(v=>city.insertAdjacentHTML('beforeend',`<option>${v}</option>`));
  function filterUniversities(){const rows=KOREA_DATA.universities.filter(u=>(!city.value||u.city===city.value)&&u.tuition<=+price.value&&u.topik<=+topik.value);$('#priceValue').textContent=(+price.value/1000000).toFixed(1)+' млн ₩';$('#topikValue').textContent=topik.value;window.dispatchEvent(new CustomEvent('university-filtered',{detail:rows}))}
  [city,price,topik].forEach(x=>x.addEventListener('input',filterUniversities)); filterUniversities();

  const cityGrid=$('#cityGrid'); cityGrid.innerHTML=KOREA_DATA.cities.map(c=>{const total=['housing','food','transport','internet','insurance','phone'].reduce((s,k)=>s+c[k],0);return `<article class="city-card"><span>${c.city}</span><strong>${format3(total)}</strong><small>Ориентир на месяц</small></article>`}).join('');
  $('#phrasebook').innerHTML=KOREA_DATA.phrases.map(p=>`<tr><td>${p[0]}</td><td lang="ko">${p[1]}</td><td>${p[2]}</td></tr>`).join('');

  $$('.share-btn').forEach(btn=>btn.onclick=async()=>{const url=location.href.split('#')[0]+'#'+btn.dataset.target;try{await navigator.clipboard.writeText(url);btn.textContent='Ссылка скопирована ✓'}catch{location.hash=btn.dataset.target}setTimeout(()=>btn.textContent='Поделиться',1800)});
  $('#siteSearch').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();$$('main section').forEach(s=>{s.hidden=!!q&&!s.textContent.toLowerCase().includes(q)});$('#searchEmpty').hidden=!q||$$('main section:not([hidden])').length>0});
  $$('.faq-question').forEach(b=>b.onclick=()=>{const open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));b.nextElementSibling.hidden=open});
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.08});$$('.reveal').forEach(e=>io.observe(e));
  // Лёгкий 3D-параллакс: работает только с точным указателем, без нагрузки на touch-устройства.
  const canTilt=matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(canTilt){
    let frame=0;
    addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{document.body.style.setProperty('--cursor-x',e.clientX+'px');document.body.style.setProperty('--cursor-y',e.clientY+'px');frame=0})},{passive:true});
    $$('.hero-panel,.feature-card,.panel,.city-card').forEach(card=>{
      card.classList.add('tilt-card');
      card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;card.style.setProperty('--ry',((x-.5)*7).toFixed(2)+'deg');card.style.setProperty('--rx',((.5-y)*6).toFixed(2)+'deg');card.style.setProperty('--mx',(x*100).toFixed(1)+'%');card.style.setProperty('--my',(y*100).toFixed(1)+'%')},{passive:true});
      card.addEventListener('pointerleave',()=>{card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');card.style.setProperty('--mx','50%');card.style.setProperty('--my','30%')});
    });
  }
  if('serviceWorker' in navigator&&location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();
