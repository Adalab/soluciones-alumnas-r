'use strict';

let secCounter = 0;
let minCounter = 1;

function incCounter() {
  const main = document.querySelector('.js_main');
  const text1 = `<p>Escrito hace ${secCounter} segundos</p>`;
  const text2 = `<p>Escrito hace ${minCounter} minutos</p>`;
  secCounter++;
  if (secCounter < 60) {
    main.innerHTML = text1;
  } else if (secCounter > 59) {
    minCounter++;
    main.innerHTML = text2;
  }
}

setInterval(incCounter, 1000);
