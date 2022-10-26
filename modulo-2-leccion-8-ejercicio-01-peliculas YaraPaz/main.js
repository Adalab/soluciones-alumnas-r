'use strict';

function workWithMovies() {
  const films = ['the lord of the rings', 'Harry Potter', 'Your name'];
  films.push('High School Musical');
  films[1] = 'La cena de los idiotas';
  //   return films.length;
  return films.toString();
}

console.log(workWithMovies());
