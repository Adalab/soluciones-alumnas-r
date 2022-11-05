"use strict";

//Obtén el número aleatorio haciendo una petición a la siguiente URL https://api.rand.fun/number/integer

const btnNumber = document.querySelector('.js-number');
const btnNumber2 = document.querySelector('.js-number2');
const textNumber = document.querySelector('.js-result');
const textNumber2 = document.querySelector('.js-result2');
btnNumber.addEventListener('click', getNumber);
btnNumber2.addEventListener('click', getNumber2);

function getNumber() {
  fetch('https://api.rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
      textNumber.innerHTML = data.result;
    });
}

//Añade parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un integer entre diferentes valores, la url quedaría así https://api.rand.fun/number/integer?min=0&max=10000

function getNumber2() {
  fetch('https://api.rand.fun/number/integer?min=0&max=500')
    .then((response) => response.json())
    .then((data) => {
      textNumber2.innerHTML = data.result;
    });
}

//¿Qué sucede?
//1-Creo las constantes, funciones y eventos como hasta ahora. 
//2-Utilizo la petición FETCH colocando entre () la URL de dónde quiero obtener el número.
//3-Ahora necesitaremos dos promesas: 
//-la primera sera un response, el servidor nos mandará la respuesta y esta la convertiremos => en una respuesta.jason().
//-en la otra promesa vamos a imprimir en nuestra consola. Data es el resultado del response.jason().