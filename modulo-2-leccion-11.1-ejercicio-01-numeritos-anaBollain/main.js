'use strict';

let arr = [];

function get100Numbers (){
    for(let i=1; i<=100; i++){
        arr.push([i]);
        console.log(`Número ${[i]} de 100`);
    }
}

get100Numbers();