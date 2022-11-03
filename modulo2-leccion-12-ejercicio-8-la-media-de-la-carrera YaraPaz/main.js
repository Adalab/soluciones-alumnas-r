'use strict';

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, number) => acc + number);
const average = result / times.length; //Hacemos la operación de la media aquí y no dentro del reduce porque no queremos que se lleve a cabo una media cada vez que recorra el array, sino que sume todos los numeros y luego al final se haga su media.
console.log(average);
