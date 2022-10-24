'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const movieList = `<ul><li class="movie1">${inception}</li><li class="movie2">${theButterFlyEffect}</li><li class="movie3">${eternalSunshineOfTheSM}</li><li class="movie4">${blueVelvet}</li><li class="movie5">${split}</li><ul>`;

const button = document.querySelector('.btn');
const popArea = document.querySelector('body');

button.addEventListener('mouseover', () => {
  button.classList.toggle('hover');
});

// button.addEventListener('click', () => {
//   popArea.innerHTML += movieList;
//   const movie1 = document.querySelector('.movie1');
//   const movie2 = document.querySelector('.movie2');
//   const movie3 = document.querySelector('.movie3');
//   const movie4 = document.querySelector('.movie4');
//   const movie5 = document.querySelector('.movie5');
//   movie1.addEventListener('click', (event) => {
//     let selectedMovieText = '';
//     const selectedMovie = event.currentTarget;
//     const selectedMovieInfo = selectedMovie.innerHTML;
//     selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
//     popArea.innerHTML += selectedMovieText;
//   document.querySelector('.movie1').addEventListener('click', ()=>{
//     popArea.innerHTML = `La peli seleccionada es: ${inception}`;
// });
//   });
//   movie2.addEventListener('click', (event) => {
//     let selectedMovieText = '';
//     const selectedMovie = event.currentTarget;
//     const selectedMovieInfo = selectedMovie.innerHTML;
//     selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
//     popArea.innerHTML += selectedMovieText;
//   });
//   movie3.addEventListener('click', (event) => {
//     const selectedMovie = event.currentTarget;
//     const selectedMovieInfo = selectedMovie.innerHTML;
//     const selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
//     popArea.innerHTML += selectedMovieText;
//   });
//   movie4.addEventListener('click', (event) => {
//     const selectedMovie = event.currentTarget;
//     const selectedMovieInfo = selectedMovie.innerHTML;
//     const selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
//     popArea.innerHTML += selectedMovieText;
//   });
//   movie5.addEventListener('click', (event) => {
//     const selectedMovie = event.currentTarget;
//     const selectedMovieInfo = selectedMovie.innerHTML;
//     const selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
//     popArea.innerHTML += selectedMovieText;
//   });
// });

//Aunque se puedan concatenar eventos dentro de un evento SOLO uno de los eventos de click de movie concatenados dentro deol otro evento se llevará a cabo, el resto no.
//Así que puedo acceder a un evento click de movie por vez. Solo refrescando la pagina y dandole al boton de nuevo puedo acceder a otro distinto.
//Se puede arreglar con una función.

function movieText(movie) {
  movie.addEventListener('click', (event) => {
    const selectedMovie = event.currentTarget;
    const selectedMovieInfo = selectedMovie.innerHTML;
    let selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
    popArea.innerHTML += selectedMovieText;
  });
}

function movieInfo(movie) {
  movie;
}
button.addEventListener('click', () => {
  popArea.innerHTML += movieList;
  const movie1 = document.querySelector('.movie1');
  const movie2 = document.querySelector('.movie2');
  const movie3 = document.querySelector('.movie3');
  const movie4 = document.querySelector('.movie4');
  const movie5 = document.querySelector('.movie5');
  movieText(movie2); //voy probando con cada una de las películas por separado. No consigo hacerlo con todas al mismo tiempo
});
