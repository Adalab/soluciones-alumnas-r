"use strict";


// En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const usersIncidence = users.find((users) => users.pin === 5232);
console.log(usersIncidence);

// Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.

//Buscamos la posición
const usersCancel  = users.findIndex((users) => users.pin === 5232);
console.log(usersCancel);

//Borramos con splice
const usersDesSubscribed = users.splice(3, 1);
console.log(usersDesSubscribed);

//Nueva lista sin la usuaria que hemos sacado
const usersSubscribed = users;
console.log(usersSubscribed);




