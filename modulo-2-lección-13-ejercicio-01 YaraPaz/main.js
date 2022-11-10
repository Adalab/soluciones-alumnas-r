'use strict';

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

//Hecho con XMLHttpRequest
let request;

function showPicture() {
  const response = JSON.parse(request.responseText).result;
  document.querySelector('.js-result').innerHTML = response;
}

function sendRequest() {
  request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://api.rand.fun/games/rockpaperscissorslizardspock'
  );
  request.addEventListener('load', showPicture);
  request.send();
}

document.querySelector('.js-emoji').addEventListener('click', sendRequest);
