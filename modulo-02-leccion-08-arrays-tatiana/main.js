function workWithMovies() {
  const movies = [
    'Laberinto del fauno',
    'Tenemos que hablar de Kevin',
    'La chica Danesa',
  ];

  movies[3] = 'Titanic';

  movies[3] = 'Pinocho';

  return movies;
}
console.log(workWithMovies());
