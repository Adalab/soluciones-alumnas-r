const serie = { id: '123', name: 'Juego de tronos' };

const favorites = [{ id: '123', name: 'Juego de tronos' }];

const renderfavorite = (el) => {
  debugger;
  if (favorites.length !== 0) {
    const answer = favorites.find((eachFav) => eachFav.id === el.id);
    if (answer !== null) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(renderfavorite(serie));
