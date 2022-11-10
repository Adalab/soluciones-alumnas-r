'use strict';

const imgSection = document.querySelector('.js-dog-images');
const numberOfDogs = 10; //cambiar este número para cambiar cuántos perretes recibimos

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getPromises(length) {
  const promises = [];
  for (let i = 0; i < length; i++) {
    promises.push(createPromise());
  }
  return promises;
}

function getBreedImages() {
  const promises = getPromises(numberOfDogs);
  Promise.all(promises)
    .then((responses) => {
      imgSection.innerHTML = '';
      for (let i = 0; i < responses.length; i++) {
        const img = `<img class="photo dog${i + 1}" src="${
          responses[i].message
        }" alt="Dog${i + 1}" />`;
        imgSection.innerHTML += img;
      }
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);
