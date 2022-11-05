"use strict";

//Consulta la documentación de esta API específicamente puedes hacer la petición a la siguiente url: https://dog.ceo/api/breed/chihuahua/images/random. Primero verifica en tu navegador que devuelve esta petición.

const imgDog = document.querySelector('.js-doggy');

function getChihuahua() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

imgDog.addEventListener('click', getChihuahua);


//¿Qué sucede?
//1-Creo las constantes, funciones y eventos como hasta ahora. 
//2-Utilizo la petición FETCH colocando entre () la URL de dónde quiero obtener el número.
//3-Ahora necesitaremos dos promesas: 
//-la primera sera un response, el servidor nos mandará la respuesta y esta la convertiremos => en una respuesta.jason().
//-en la otra promesa vamos a imprimir en nuestra consola. Data es el resultado del response.jason(). Le digo que pinte en pantalla la etiqueta img del HTML, esta coge los datos de message ynos los enseña, que es la foto en cuestión (esto ocurre porque es el schema de la respuesta, es lo que ha diseñado la usuaria).