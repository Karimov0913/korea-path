// Живой градиентный фон на Granim.js. При недоступном CDN остаётся CSS-fallback.
(() => {
  const canvas=document.getElementById('granim-bg');
  if(!canvas||!window.Granim||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const granim=new Granim({
    element:'#granim-bg',
    name:'korea-path-background',
    direction:'diagonal',
    isPausedWhenNotInView:true,
    stateTransitionSpeed:1100,
    states:{
      'default-state':{
        gradients:[
          ['#fffaf6','#f2c8ae'],
          ['#fffdf9','#efbfa3'],
          ['#f8dfcf','#fff8f3'],
          ['#fff7f1','#eeb99b']
        ],
        transitionSpeed:8000
      },
      'dark-state':{
        gradients:[
          ['#241510','#4a2a20'],
          ['#2c1a14','#663927'],
          ['#1e130f','#523024'],
          ['#301c15','#71422f']
        ],
        transitionSpeed:9000
      }
    }
  });
  const sync=()=>granim.changeState(document.documentElement.dataset.theme==='dark'?'dark-state':'default-state');
  sync();
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
})();
