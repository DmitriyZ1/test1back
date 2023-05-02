
const knopka = document.querySelector('.bok');
const list = document.querySelector('.out');

let host = 'http://45.12.239.38:3000';
// let host = 'http://localhost:3000';

async function zapros(url, fun){
   let z = await fetch(url);
   let zz = await z.json();
   if(!fun) console.log(zz)
   else fun(zz);
    
}

function outCarts(d) {
    d.forEach(element => {
        const cart = document.createElement('div');
        cart.classList.add('item');
        cart.textContent = `Карта №${element}`;
        list.append(cart);
    });
}

knopka.addEventListener('click', () => {
    zapros(host + '/prikol?k=10', outCarts)
})