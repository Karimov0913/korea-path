// Живой градиентный фон на Granim.js. При недоступном CDN остаётся CSS-fallback.
(() => {
  const canvas=document.getElementById('granim-bg');
  const mobileOrTouch=matchMedia('(max-width: 767px), (pointer: coarse)').matches;
  if(!canvas||!window.Granim||mobileOrTouch||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const granim=new Granim({
    element:'#granim-bg',
    name:'korea-path-background',
    direction:'diagonal',
    isPausedWhenNotInView:true,
    stateTransitionSpeed:1100,
    states:{
      'default-state':{
        gradients:[
          ['#fff8f1','#e99f77'],
          ['#f0b38f','#fffaf4'],
          ['#fff0e4','#d9825b'],
          ['#e7a27d','#ffe3d1']
        ],
        transitionSpeed:5600
      },
      'dark-state':{
        gradients:[
          ['#170b08','#75402d'],
          ['#3a1d15','#a65f43'],
          ['#21100c','#643523'],
          ['#4a251a','#8f4e36']
        ],
        transitionSpeed:6200
      }
    }
  });
  const sync=()=>granim.changeState(document.documentElement.dataset.theme==='dark'?'dark-state':'default-state');
  sync();
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
})();
