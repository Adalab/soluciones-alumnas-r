'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const userIncident = users.find((user) => user.pin === 5232);

console.log(userIncident);

const indexIncident = users.findIndex((user) => user.pin === 5232);

console.log(indexIncident);

users.splice (3,1);

console.log(users);
