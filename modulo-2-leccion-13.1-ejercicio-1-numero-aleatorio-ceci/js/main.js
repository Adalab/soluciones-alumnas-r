'use strict';

/* function getEmoji() {
    fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.js-result').innerHTML = data.result;
      });
  }
  document.querySelector('.js-emoji').addEventListener('click', getEmoji); */

 /*  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    const img = document.querySelector('img');
    img.src = data.message;
    img.alt = 'Un perro';
  }); */

  /* function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Un perro';
      });
  }
  const btn = document.querySelector('.js-dog');
  btn.addEventListener('click', getDogImage); */

/*   const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise()];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages); */

//1. Generar número aleatorio

const text = document.querySelector('.js-text');
const btn = document.querySelector('.js-btn');

function getNumber(){
    fetch('https://api.rand.fun/number/integer?min=0&max=300')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        text.innerHTML = data.result;
    });
}

btn.addEventListener('click', getNumber);