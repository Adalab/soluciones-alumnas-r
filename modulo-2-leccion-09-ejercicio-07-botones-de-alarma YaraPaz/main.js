'use strict';

//Pulsar sobre cualquier boton y alternar fondo rojo y blanco en fondo pantalla

//Elements
const buttons = document.querySelectorAll('.js_btn');
const backgroundColor = document.querySelector('.js_body'); //Con queryselector indicar siempre si es elemento, clase o id y cuidado al copiar con usar el normal o el ALL

//Functions
function handleClick(event) {
  event.preventDefault();
  backgroundColor.classList.toggle('alarm');
}

//Events
let i = 0; //Declarar siempre la "i"
for (i = 0; i < buttons.length; i++) {
  //Se pueden hacer bucles que recorran arrays y apliquen un evento a cada uno de esos elementos del array
  buttons[i].addEventListener('click', handleClick);
}
