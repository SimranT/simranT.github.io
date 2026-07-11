const t=document.getElementById('theme'),
  r=document.documentElement,
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const progress=document.getElementById('progress');
const cursor=document.getElementById('cursor');

window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=((window.scrollY/h)*100)+'%';
});

window.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px';
  cursor.style.top=e.clientY+'px';
});

document.querySelectorAll('a,button,.card,.btn,.dash-card,.dash-tile,.travel-card,.itin-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('big'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('big'));
});

let d='dark';
try{
  const saved=localStorage.getItem('theme');
  if(saved==='light'||saved==='dark') d=saved;
}catch(e){}

r.setAttribute('data-theme',d);
if(t) t.textContent=d==='dark'?'◐':'☀';

if(t){
  t.onclick=()=>{
    d=d==='dark'?'light':'dark';
    r.setAttribute('data-theme',d);
    t.textContent=d==='dark'?'◐':'☀';
    try{localStorage.setItem('theme',d);}catch(e){}
  };
}
