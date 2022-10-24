'use strict';

function boxCalc(boolean, width, padding, borderSize) {
  if (boolean === true) {
    return (
      'El ancho del contenido es:' +
      ' ' +
      (width - padding - borderSize) +
      ' ' +
      `y el ancho total de la caja es: ${width})`
    );
  } else if (boolean === false) {
    return (
      `El ancho del contenido es: ${width} y el ancho total de la caja es:` +
      (width + padding + borderSize)
    );
  }
}

const result = boxCalc(true, 100, 5, 5);
console.log(result);

//si es true quiere decir que contiene border-box y si es false quiere decir que contiene content-box
