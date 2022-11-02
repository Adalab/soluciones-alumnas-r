'use strict';

let arr = [];

function get100Numbers() {
    for(let i=1; i<=100; i++){
        arr.push([i]);
        console.log(`Número ${[i]} de 100`);
    }
}

console.log('numbers');

get100Numbers();

console.log(arr.length);
console.log(arr[0]);
console.log(arr[10]);

function getReversed100Numbers() {
    arr.reverse();
    for(let i=0; i<arr.length; i++){
        console.log(`Número ${arr[i]} de 100`);
    }
}

console.log('reversed');

getReversed100Numbers();

console.log(arr.length);
console.log(arr[0]);
console.log(arr[10]);


