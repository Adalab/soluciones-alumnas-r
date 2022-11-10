'use strict';

const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

function handleClic(event) {
  event.currentTarget.classList.toggle('teacher--selected');
  const selected = event.currentTarget;
  const favorite = selected.querySelector('.favorite');

  if (favorite.innerHTML === 'Añadir') {
    favorite.innerHTML = 'Quitar';
  } else {
    favorite.innerHTML = 'Añadir';
  }
}

isra.addEventListener('click', handleClic);
tuerto.addEventListener('click', handleClic);
nasi.addEventListener('click', handleClic);
