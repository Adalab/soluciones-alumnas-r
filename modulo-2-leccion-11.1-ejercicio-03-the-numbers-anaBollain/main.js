'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

let pairNumbers = [];
let multipleThree = [];

function bestLostNumber(){
    for (let number of lostNumbers){
        if (number % 2 === 0){
            pairNumbers.push(number);
        }
        if (number % 3 ===0){
            multipleThree.push(number);
        }
}
}

bestLostNumber();

console.log(pairNumbers);

console.log(multipleThree);

const resultNumbers = pairNumbers.concat(multipleThree);

console.log(resultNumbers);

