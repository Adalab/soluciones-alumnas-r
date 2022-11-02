'use strict';

let tree = '▲';
let treeLine = '';
let christmasTree = [];

function paintTree (height){
    for (let i=0; i<height; i++){
        treeLine += tree;
        christmasTree.push(treeLine);
        console.log(treeLine);
        console.log(christmasTree);
    }
}

paintTree(5);

christmasTree.push('|');

console.log(christmasTree);

christmasTree.unshift('★');

console.log(christmasTree);





