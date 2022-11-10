'use strict';

const item1 = document.querySelector('.item--1');
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto
const mother = item1.parentElement;
console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
    mother.className
  }`
);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"

//-------------
const newItem = document.createElement('li');
console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido para ese LI
const newContent = document.createTextNode('Item nuevo');

// Y se lo añadimos a nuestro <li>
newItem.appendChild(newContent);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"

//Cogemos del html la ul dentro de la que estan los LI y le metemos el nuevo LI creado
const items = document.querySelector('.items');
items.appendChild(newItem);

//eliminar items del dom
// items.remove();

//Eliminar hijas de Items del DOM (Elimina el elemento con clase .item--2 que es descendiente de .items)
const item2 = items.querySelector('.item--2');
items.removeChild(item2);

// Si tenemos <input type="text" name="firstname" id="firstname" value="Ada">
const nameInput = document.querySelector('#firstname');

console.log(nameInput.value); // Pintará el valor actual, 'Ada'
nameInput.value = 'Joan'; // Rellenará el input con el valor 'Joan'

/*
Para poner un estilo, lo asignaremos usando la siguiente notación
style.propiedadCSS = 'valor'

De esta forma no modificaremos los estilos previamente asignados

Si la propiedad CSS tiene un guión (background-color) lo convertiremos a camelcase
backgroundColor
*/
nameInput.style.backgroundColor = 'red';

/*
Si queremos poner varios estilos a la vez o sobreescribir los anteriores,
usaremos esta notación
*/
nameInput.style = 'color: red; color: blue;';
