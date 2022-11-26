'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premiumUsers = users.filter((user) => user.isPremium === true); //Filter admite expresiones booleanas
console.log(premiumUsers);
