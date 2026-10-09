document.documentElement.classList.add('js');
const $ = (selector, parent=document) => parent.querySelector(selector);
const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];
const menu = $('.menu-toggle');
const nav = $('#main-nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
  nav.classList.toggle('open', open);
});
$$('a',nav).forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded','false');menu.textContent='Menu';nav.classList.remove('open');
}));
let category='all';
const papers=$$('.publication');
function filterPublications(){
  const query=$('#publication-search').value.trim().toLowerCase();
  let count=0;
  papers.forEach(paper=>{
    const matches=(category==='all'||paper.dataset.type===category) && paper.textContent.toLowerCase().includes(query);
    paper.hidden=!matches;if(matches)count++;
  });
  $('#publication-count').textContent=`${count} of ${papers.length} selected publications`;
  $('#no-results').hidden=count!==0;
}
$$('.filter').forEach(button=>button.addEventListener('click',()=>{
  category=button.dataset.filter;
  $$('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  filterPublications();
}));
$('#publication-search')?.addEventListener('input',filterPublications);
// Links from the biography and project section should reveal the referenced paper.
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
  if(!papers.some(paper=>'#'+paper.id===link.hash))return;
  category='all';$('#publication-search').value='';
  $$('.filter').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter==='all')));
  filterPublications();
}));
const citations=JSON.parse($('#citation-data').textContent);
const dialog=$('#citation-dialog');
let activeCitation=null;let previousFocus=null;let toastTimer;
function notify(message){const toast=$('#toast');toast.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.hidden=true,3500)}
async function copyText(text){
  if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return}
  throw new Error('Clipboard unavailable');
}
$$('[data-cite]').forEach(button=>button.addEventListener('click',()=>{
  previousFocus=button;activeCitation=citations[button.dataset.cite];
  $('#citation-text').textContent=activeCitation.bibtex;
  $('#citation-title').textContent=`Citation · ${activeCitation.venue} ${activeCitation.year}`;
  dialog.showModal();
}));
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>previousFocus?.focus());
$('#copy-citation').addEventListener('click',async()=>{
  try{await copyText(activeCitation.bibtex);notify('BibTeX copied to clipboard.')}catch{const range=document.createRange();range.selectNodeContents($('#citation-text'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);notify('Select and copy the citation, or download the BibTeX file.');}
});
$('#download-citation').addEventListener('click',()=>{
  const url=URL.createObjectURL(new Blob([activeCitation.bibtex+'\n'],{type:'text/plain;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download=activeCitation.id+'.bib';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
$('#copy-email')?.addEventListener('click',async()=>{try{await copyText('liuyx7@shanghaitech.edu.cn');notify('Email address copied.')}catch{notify('Email: liuyx7@shanghaitech.edu.cn')}});
$('#print-profile')?.addEventListener('click',()=>window.print());
