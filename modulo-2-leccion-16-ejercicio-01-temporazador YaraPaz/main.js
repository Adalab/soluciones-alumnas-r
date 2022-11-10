'use strict';

let counter = 0;

function incCounter() {
  const textCounter = document.querySelector('.js_counter');
  counter++;
  textCounter.innerHTML = counter;
}

setInterval(incCounter, 2000);
