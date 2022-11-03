'use strict';

const times = [56, 9, 45, 28, 35];

const result = times.reduce((a , b) => (a + b)) / times.length;

console.log(result);

const result2 = times.reduce((acc, number) => acc + number) / times.length;

console.log(result2);

