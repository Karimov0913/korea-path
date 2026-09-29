// Калькуляторы бюджета, валют и предварительной оценки поступления.
(() => {
  const D = window.KOREA_DATA;
  const money = new Intl.NumberFormat('ru-RU');
  const byId = id => document.getElementById(id);
  function format3(krw) {
    const usd = krw * D.rates.KRW_USD;
    const uzs = usd / D.rates.UZS_USD;
    return `${money.format(Math.round(krw))} ₩ · ${money.format(Math.round(uzs))} UZS · $${money.format(Math.round(usd))}`;
  }
  window.format3 = format3;
  function calculateBudget() {
    const fields = ['housing','food','transport','internet','insurance','phone'];
    const total = fields.reduce((s,id) => s + (+byId(id).value || 0), 0);
    byId('budgetTotal').textContent = format3(total);
    localStorage.setItem('kp-budget', JSON.stringify(Object.fromEntries(fields.map(id=>[id,byId(id).value]))));
  }
  function loadCity(city) {
    const row = D.cities.find(x=>x.city===city) || D.cities[0];
    ['housing','food','transport','internet','insurance','phone'].forEach(k=>byId(k).value=row[k]);
    calculateBudget();
  }
  byId('budgetCity').addEventListener('change', e=>loadCity(e.target.value));
  document.querySelectorAll('#budgetCalc input').forEach(x=>x.addEventListener('input',calculateBudget));
  const saved = JSON.parse(localStorage.getItem('kp-budget') || 'null');
  if(saved) Object.entries(saved).forEach(([k,v])=>{ if(byId(k)) byId(k).value=v; }); else loadCity('Сеул');
  calculateBudget();

  function chance() {
    const gpa=+byId('chanceGpa').value, topik=+byId('chanceTopik').value, ielts=+byId('chanceIelts').value;
    byId('chanceResults').innerHTML = D.universities.map(u=>{
      const okG=gpa>=u.gpa, okT=topik>=u.topik || ielts>=u.ielts;
      const state=okG&&okT?'Подходите':'Нужно усилить';
      const why=[]; if(!okG) why.push(`GPA от ${u.gpa}`); if(!okT) why.push(`TOPIK ${u.topik} или IELTS ${u.ielts}`);
      return `<li class="chance ${okG&&okT?'good':'warn'}"><strong>${u.name}</strong><span>${state}${why.length?': '+why.join(', '):''}</span></li>`;
    }).join('');
    localStorage.setItem('kp-profile',JSON.stringify({gpa,topik,ielts}));
  }
  ['chanceGpa','chanceTopik','chanceIelts'].forEach(id=>byId(id).addEventListener('input',chance));
  const p=JSON.parse(localStorage.getItem('kp-profile')||'null'); if(p) Object.entries(p).forEach(([k,v])=>{const el=byId('chance'+k[0].toUpperCase()+k.slice(1));if(el)el.value=v});
  chance();

  function convert(){
    const amount=+byId('currencyAmount').value||0, from=byId('currencyFrom').value;
    const usd=from==='USD'?amount:from==='KRW'?amount*D.rates.KRW_USD:amount*D.rates.UZS_USD;
    byId('currencyResult').innerHTML=`<strong>${money.format(Math.round(usd/D.rates.UZS_USD))} UZS</strong><strong>${money.format(Math.round(usd/D.rates.KRW_USD))} ₩</strong><strong>$${usd.toFixed(2)}</strong>`;
  }
  ['currencyAmount','currencyFrom'].forEach(id=>byId(id).addEventListener('input',convert)); convert();
  window.addEventListener('university-filtered', e=>{
    const rows=e.detail; byId('universityRows').innerHTML=rows.map(u=>`<tr><td><strong>${u.name}</strong><br><a href="${u.site}" target="_blank" rel="noopener">Официальный сайт ↗</a></td><td>${u.city}</td><td>TOPIK ${u.topik}<br>GPA ${u.gpa}+</td><td>${format3(u.tuition)}</td><td>${u.scholarship}</td><td>${u.deadline}<br><small>${u.email}</small></td></tr>`).join('')||'<tr><td colspan="6">Нет совпадений. Измените фильтры.</td></tr>';
  });
})();
