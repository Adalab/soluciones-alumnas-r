'use strict';


//para cambiar el contenido del texto
const text = document.querySelector('.text');

text.innerHTML = text.innerHTML + ' mundo';

//para mostrar el nombre de alguien
const winner = document.querySelector ('.list-2'); //eliges una parte de la lista

const title =document.querySelector ('.title'); //eliges donde va el nombre

title.innerHTML = title.innerHTML + winner.innerHTML; //lo combinas


//proteger password
const password = document.querySelector ('.password');

password.innerHTML = '*****';

//añadir elementos a un div vacío

const container = document.querySelector ('.container'); //elegimos el contenedor
//creamos el contenido, igual que en HTML
const titleContent = '<h1>Lorem ipsum</h1>';
const img = '<img src="https://via.placeholder.com/350x150">';
const textContent = '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>'
// le decimos al contenedor que incluya el contenido
container.innerHTML = titleContent + img + textContent;

/*esto se podría poner todo en la misma línea de "const content"-- 
const content = '<h1>Lorem ipsum</h1> <img src="https://via.placeholder.com/350x150"> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>';
 y luego decirle container.innerHTML = content;*/



