"use strict";

const numberList = document.querySelector('.items');
const numbers = [1, 2, 3];

//Bucle para recorrer la nueva lista

for (const item of numbers) { 
  const newItem = document.createElement("li"); // Creamos un elemento nuevo, un <li>
  const newContent = document.createTextNode(item); // Ahora introducimos el contenido dado por el enunciado
  newItem.appendChild(newContent); // Y se lo añadimos a nuestro <li> con appendChild()
  const items = document.querySelector(".items"); //cogemos la ul 
  items.appendChild(newItem); //.appendChild() nos permite añadir elementos a nuestra web, pintamos los <li> dentro de nuestra <ul>
}

