const enter=document.querySelector('#enter'),welcome=document.querySelector('#welcome'),petalField=document.querySelector('#petalField');
const audio=new Audio('assets/shubh-din-hook.mp3');audio.loop=true;audio.volume=1;audio.preload='auto';audio.playsInline=true;
async function startMusic(){try{audio.muted=false;audio.volume=1;await audio.play()}catch(error){/* Browsers retry after the visitor's first interaction. */}}
startMusic();
['pointerdown','touchstart','keydown','scroll'].forEach(type=>window.addEventListener(type,startMusic,{passive:true,once:true}));
function petals(){for(let i=0;i<22;i++)setTimeout(()=>{const p=document.createElement('i');p.className='petal';p.style.left=Math.random()*100+'vw';p.style.setProperty('--drift',(Math.random()*160-80)+'px');p.style.animationDuration=(5+Math.random()*5)+'s';petalField.appendChild(p);setTimeout(()=>p.remove(),10500)},i*180)}
enter.addEventListener('click',()=>{welcome.classList.add('open');startMusic();petals();setTimeout(()=>welcome.style.display='none',1900)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.classList.contains('havan-scene'))petals()}}),{threshold:.14});document.querySelectorAll('.reveal,.havan-scene').forEach(e=>io.observe(e));
const target=new Date('2026-11-15T08:00:00+05:30');function tick(){let d=Math.max(0,target-Date.now()),v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];document.querySelectorAll('#count b').forEach((e,i)=>e.textContent=String(v[i]).padStart(2,'0'))}tick();setInterval(tick,1000);
