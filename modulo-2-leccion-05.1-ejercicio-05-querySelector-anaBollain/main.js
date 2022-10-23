'use strict';

// querySelector para todas

function getEl(element){
    return (document.querySelector(element));
}

const btnEl = getEl('.btn'); 

console.log (getEl('.btn')); // devuelve el elemento HTML

console.log (typeof (btnEl)); // devuelve object

const articleEl = getEl('.article'); 

console.log (getEl('.article')); // devuelve null porque el elemento HTML no existe

console.log (articleEl); // devuelve null porque el elemento HTML no existe

console.log (typeof (articleEl)); // devuelve object