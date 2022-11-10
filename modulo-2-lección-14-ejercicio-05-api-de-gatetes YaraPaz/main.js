'use strict';

const img = document.querySelector('.js_img');
const btn = document.querySelector('.js_btn');
let catImg = '';

function handleClick(ev) {
  ev.preventDefault();
  btn.innerHTML = 'Another';
  fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', {
    method: 'GET',
    headers: {
      'x-api-key':
        'live_v9qTIDq7XJcmrg9o86XpEUJDphC5frroQUPJbFSGebQO392zAQSwg0GMtGHrr4pV',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      catImg = data[0].url; //el data que recibo es un array con un solo objeto por lo que necesito indicar su indice para acceder a él
      img.src = catImg;
    });
}

btn.addEventListener('click', handleClick);
