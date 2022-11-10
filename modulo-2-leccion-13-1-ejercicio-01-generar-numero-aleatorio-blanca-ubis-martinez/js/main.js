'use strict';

//variables
const numberBtn = document.querySelector('.js-number');
const resultElement = document.querySelector('.js-result');

//functions
function getNumber() {
  fetch('https://api.rand.fun/number/integer?min=0&max=10000')
    .then((response) => response.json())
    .then((data) => {
      resultElement.innerHTML = data.result;
    });
}

//events
numberBtn.addEventListener('click', getNumber);
