'use strict';

let counter = 0;

function incCounter() {
  if (counter === 12) {
    window.clearInterval(myCounter);
  } else {
    const textCounter = document.querySelector('.js_counter');
    const main = document.querySelector('.js_main');
    counter++;
    textCounter.innerHTML = counter;
    const img = document.createElement('img');
    img.src = './una-uva-aislada-en-el-primer-blanco-del-fondo-116838258.jpg';
    img.classList.add('grape');
    main.appendChild(img);
  }
}

const myCounter = setInterval(incCounter, 1000);
