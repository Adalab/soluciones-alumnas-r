'use strict';

const christmasTree = [];
let treePart = '';

function paintTree(height) {
  for (let i = 0; i < height; i++) {
    treePart = '▲';
    christmasTree.push(treePart);
    console.log(christmasTree);
  }
}

paintTree(5); //Bucle que se repite 5 veces

//------ (adding star and trunk)------

const tree = []; //Tengo que crear otro array porque este else if se repetirá varias veces, desde el numero 1 al 6, y no queremos que nos haga splice cada vez, sino que nos cree otro array iterativo completamente nuevo
const topBottom = []; //sobreescribirá la estrella del top y el trunk del bottom. Puedo hacerlo con splice porque tanto el valor 0 como el 7 solo ocurren una vez
let star = '';
let leaves = '';
let trunk = '';

function paintTreeHalf() {
  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      star = '★';
      topBottom.push(star);
      console.log(topBottom);
    } else if (i >= 1 && i <= 6) {
      leaves = '▲';
      tree.push(leaves);
      console.log(tree);
    } else if (i === 7) {
      trunk = '|';
      topBottom.splice(0, 1, trunk);
      console.log(topBottom);
    }
  }
}

paintTreeHalf();

//--------(adding the other half of the tree)-------

const tree = [];
const top = [];
const bottom = [];
let star = '';
let leaves = '';
let trunk = '';

function paintTreeComplete() {
  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      star = '★';
      top.push(star);
      console.log(top);
    } else if (i >= 1 && i <= 6) {
      leaves = '▲';
      tree.push(leaves);
      console.log(tree);
    } else if (i === 7) {
      trunk = '|';
      bottom.splice(0, 1, trunk);
      console.log(bottom);
    }
    return top + tree + tree.reverse() + bottom;
  }
  return top + tree + tree.reverse() + bottom;
}

paintTreeComplete();
