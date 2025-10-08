```js
const sample=[
{title:'iPhone 11 64GB',price:2300000,loc:'Jakarta',img:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=60'},
{title:'Samsung A52',price:1700000,loc:'Bandung',img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60'},
{title:'Xiaomi Redmi Note 10',price:1600000,loc:'Surabaya',img:'https://images.unsplash.com/photo-1580910051074-7d50c9ae1c61?auto=format&fit=crop&w=800&q=60'}
];
const productsEl=document.getElementById('products');
function formatPrice(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.');}
function render(list){productsEl.innerHTML='';list.forEach(p=>{const c=document.createElement('div');c.className='card';c.innerHTML=`<img src="${p.img}"><div><div style='display:flex;justify-content:space-between'><div>${p.title}</div><div class='price'>Rp ${formatPrice(p.price)}</div></div><div class='location'>${p.loc}</div></div>`;productsEl.appendChild(c)});}render(sample);
const modal=document.getElementById('modal');
['open-sell','sell-link'].forEach(id=>document.getElementById(id).addEventListener('click',()=>modal.style.display='flex'));
document.getElementById('closeModal').addEventListener('click',()=>modal.style.display='none');
document.getElementById('sellForm').addEventListener('submit',e=>{e.preventDefault();alert('Iklan berhasil (demo)');modal.style.display='none';});
```
