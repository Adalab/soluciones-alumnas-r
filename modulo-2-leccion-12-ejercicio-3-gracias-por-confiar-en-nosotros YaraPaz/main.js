'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const greetingUsers = function (user) {
  let premiumUsers = '';
  let nonPremiumUsers = '';

  if (user.isPremium === true) {
    premiumUsers += `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
  } else {
    nonPremiumUsers += `Bienvenida ${user.name}.`;
  }

  return premiumUsers + nonPremiumUsers; //Aunque yo indique aquí este orden la función se aplicará sobre cada elemento en el orden en el que aparece dentro del array inicial
};

const usersGreetings = users.map(greetingUsers); //La función creada aparte como la tipo arrow que se podría haber añadido dentro, ambas deben tener el mismo parámetro. Eso es lo que me falló al principio. NO PUEDO cambiar los parametros entre una y otra.

console.log(usersGreetings);
