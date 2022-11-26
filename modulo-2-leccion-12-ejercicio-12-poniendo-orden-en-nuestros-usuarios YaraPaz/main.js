'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

users.sort();
console.log(users);

//---------

users.sort((a, b) => {
  const pinA = a.pin;
  const pinB = b.pin;
  return pinA - pinB;
});

console.log(users);
