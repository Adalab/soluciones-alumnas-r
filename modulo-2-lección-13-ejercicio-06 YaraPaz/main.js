'use strict';
//Elements
const btn = document.querySelector('.js-btn');

//Crea las promesas de las peticiones al servidor y las concatena con json directamente
const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise()]; //Creamos el array de promesas ejecutando la función anterior dos veces
  Promise.all(promises).then((responses) => {
    //ejecutamos promise.all pasandole como parametro el array de promesas. Una vez todas las promesas de este array se hayan cumplido se ejecutará el THEN posterior a la que le llegan todos los resultados de este array en su parametro responses. Este responses será otro array nuevo con las respuestas
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
  // recorremos ese nuevo array con las respuestas y pintamos las imagenes. FIN
}

btn.addEventListener('click', getBreedImages);
