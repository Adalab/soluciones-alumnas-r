'use strict';

let counter = 0;
const btn = document.querySelector('.btn');

function changeButton() {
  if (counter === 10) {
    btn.innerHTML = '¿Te has quedado dormido?';
  }
}

function incCounter() {
  counter++;
  if (counter === 10) {
    window.clearInterval(timer);
  }
}

const timer = setInterval(incCounter, 1000);
setTimeout(changeButton, 10000);

function handleClick() {
  counter = 0;
  btn.innerHTML = 'Hazme click';
}

btn.addEventListener('click', handleClick);
