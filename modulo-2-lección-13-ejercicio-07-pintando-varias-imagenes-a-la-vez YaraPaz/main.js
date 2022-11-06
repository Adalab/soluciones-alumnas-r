'use strict';
//Elements
const btn = document.querySelector('.js-btn');
const imagesSection = document.querySelector('.js_images');

//Functions
//Crea las promesas de las peticiones al servidor y las concatena con json directamente
const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getDogImages() {
  const promises = [
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
  ];
  console.log(promises);

  Promise.all(promises).then((responses) => {
    //ejecutamos promise.all pasandole como parametro el array de promesas. Una vez todas las promesas de este array se hayan cumplido se ejecutará el THEN posterior a la que le llegan todos los resultados de este array en su parametro responses. Este responses será otro array nuevo con las respuestas
    for (let i = 0; i < responses.length; i++) {
      let img = `<img class="${'.dog' + (i + 1)}" src="${
        responses[i].message
      }"  alt="${
        'Dog' + (i + 1)
      }" style="width:100px; height:100px; object-fit: cover"/>`;
      //La clase y el alt solo me indican el mensaje inicial que aparecerá y el número, que será básicamente su posición del array + 1, porque el array se inicia en 0 y eso no es natural, por eso le sumamos 1

      //Cuidado con olvidarse comillas o cosas así cuando escriba las etiquetas html desde JS

      imagesSection.innerHTML += img;
      //Importante el += porque sino solo me devolverá un elemento al sobreescribir. Así conseguimos que me devuelva todos.
    }
  });
  // recorremos ese nuevo array con las respuestas y pintamos las imagenes. FIN
}

//Events
btn.addEventListener('click', getDogImages);
