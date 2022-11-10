'use strict';

// Elementos HTML DOM
const btn = document.querySelector('.js_button');
const face = document.querySelector('.js_title');
const background = document.querySelector('.js_main');
const select = document.querySelector('.js_select');

// Functions

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1)); //Indico return en vez de guardarlo dentro de una constante porque en la otra función no me serviría ese constante al ser de tipo local
}

function changeColor() {
  if (randomNumber(100) % 2 === 0) {
    background.classList.remove('orange');
    background.classList.add('yellow');
  } else {
    background.classList.remove('yellow');
    background.classList.add('orange');
  }
}

function paintFace(optionValue) {
  if (optionValue === ':)') {
    face.innerHTML = optionValue;
  } else if (optionValue === ':(') {
    //También puedo usar simplemente un ELSE y no ELSE IF
    face.innerHTML = optionValue;
  }
  //Se puede hacer con condicionales como he hecho yo aquí O bien utilizando la peculiaridad del SELECT que hereda el valor de su OPTION seleccionado, por lo que no es necesario ni utilizar el target ni dar clases concretas a cada option para trabajar con ellos.
}

function handleClick(event) {
  event.preventDefault();
  const optionValue = select.value;
  paintFace(optionValue);
  changeColor();
}

// Events
btn.addEventListener('click', handleClick);
