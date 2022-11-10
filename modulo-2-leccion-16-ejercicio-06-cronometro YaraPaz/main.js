'use strict';

let counter = 0;
const stopBtn = document.querySelector('.stop');
const continueBtn = document.querySelector('.continue');

function incCounter() {
  const textCounter = document.querySelector('.js_counter');
  counter++;
  textCounter.innerHTML = counter;
}

const myCronometer = setInterval(incCounter, 1000);

stopBtn.addEventListener('click', () => {
  window.clearInterval(myCronometer);
});

continueBtn.addEventListener('click', () => {
  setInterval(incCounter, 1000);
});
