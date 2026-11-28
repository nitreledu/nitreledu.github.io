(function(){
 const select=document.getElementById('language');
 const saved=localStorage.getItem('nitrel-language')||'en';
 function applyLanguage(lang){
   document.documentElement.lang=lang;
   document.querySelectorAll('[data-'+lang+']').forEach(el=>{el.textContent=el.getAttribute('data-'+lang)});
   if(select) select.value=lang;
   localStorage.setItem('nitrel-language',lang);
 }
 if(select){select.addEventListener('change',()=>applyLanguage(select.value));}
 applyLanguage(saved);
 const toggle=document.getElementById('menuToggle'),nav=document.getElementById('mainNav');
 if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const topBtn=document.createElement('button');
 topBtn.className='to-top';
 topBtn.setAttribute('aria-label','Back to top');
 topBtn.innerHTML='&#8593;';
 document.body.appendChild(topBtn);
 const toggleTop=()=>topBtn.classList.toggle('show',window.scrollY>300);
 window.addEventListener('scroll',toggleTop,{passive:true});
 toggleTop();
 topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();
