'use strict';

//Elements
// const btn = document.querySelector('.js_btn');
// const favMovieText = document.querySelector('.js_text');
// const favMoviesInputs = document.querySelectorAll('.js_input');
// let movie1 = '';
// let movie2 = '';

//Functions
// function handleClick(event) {
//   event.preventDefault();
//   movie1 = favMoviesInputs[0].value;
//   movie2 = favMoviesInputs[1].value;
//   favMovieText.innerHTML =
//     `¡A mí también me encantó ${movie1}! Tenemos mucho en común, humana.` +
//     ' ' +
//     `¡A mí también me encantó ${movie2}! Tenemos mucho en común, humana.`;
// }

//Events
// btn.addEventListener('click', handleClick);

//------ (Planteamiento usando bucles) ------

//Elements
const btn = document.querySelector('.js_btn');
const favMovieText = document.querySelector('.js_text');
const favMovie1Input = document.querySelector('.js_input1');
const favMovie2Input = document.querySelector('.js_input2');
let movie1 = '';
let movie2 = '';

//Functions
function handleClick(event) {
  event.preventDefault();
  movie1 = favMovie1Input.value;
  movie2 = favMovie2Input.value;
  const favMovies = [movie1, movie2];
  let i = 0;
  for (i = 0; i < favMovies.length; i++) {
    favMovieText.innerHTML += `¡A mí también me encantó ${favMovies[i]}! Tenemos mucho en común, humana.`;
  }
}

//Events
btn.addEventListener('click', handleClick);
