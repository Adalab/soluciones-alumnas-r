'use strict';

/*1. Películas
Haz un array movies con un listado de 3 películas que te gusten. Será un array de cadenas (strings).*/

const movies = ['Zombies Party', 'Toy Story', 'Red'];

/*Añade al array anterior otra película más que te guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar el array completo en la consola.*/

movies[3] = 'The Goonies';
console.log(movies); // Devuelve (4) ['Zombies Party', 'Toy Story', 'Red', 'The Goonies']

/*Modifica una película que menos te guste de las que hay en el array por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en la consola.*/

movies[2] = 'La Princesa Prometida'; 
console.log(movies); // Devuelve (4) ['Zombies Party', 'Toy Story', 'La Princesa Prometida', 'The Goonies']


// Para la última parte del ejercicio hago otra cosa (no lo que piden) añadiendo botones, eventos y pintando en el html un listado iterativo (va añadiendo las pelis del input a un listado).

const inputFilm = document.querySelector('.input');
const btnFilm = document.querySelector('.button');
const htmlList = document.querySelector('.list');
const resetFilm  = document.querySelector('.reset');
const moviesList = [];
let index = 0;

//Va añadiendo pelis a un <ul> vacío del html
function paintHtml () {
    let film = moviesList[index++];
    let result = `<li>${film}</li>`
    htmlList.innerHTML += result;
}

//Recoge los valores del input
function workWithMovies () {
    moviesList[index] = inputFilm.value;
    console.log(moviesList);
    return moviesList;
}

//Función manejadora del botón 'Enviar película'
function handleClick (ev){
    ev.preventDefault();
    workWithMovies();
    paintHtml();
}

//Función del botón reset (en este caso sólo quiero que borre el input, no el listado completo, para seguir añadiendo pelis sin tener que estar borrando)
function resetClick(event) {
    event.preventDefault();
    inputFilm.value = '';
}

//Escuchando eventos de los botones
btnFilm.addEventListener('click', handleClick);
resetFilm.addEventListener('click', resetClick);



