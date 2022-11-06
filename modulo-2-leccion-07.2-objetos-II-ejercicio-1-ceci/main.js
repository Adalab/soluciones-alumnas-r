'use strict';

// 1. Bio de Adalabers 2

const adalaberText = document.querySelector('.text-list');

const adalaber1 = {
    name: 'Susana',
    age: '34 años',
    job: 'periodista',
    showBio: function (){
        return `<li>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}.</li>`;
    }

    }

console.log(adalaber1);
adalaberText.innerHTML = adalaber1.showBio();


//En adalaber2, uso this porque es una función normal, en las arrow no se puede
const adalaber2 = {
        name: 'Rocío',
        age: '25 años',
        job: 'actriz',
        showBio: function (){
            return `<li>Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}.</li>`;
        }
    
        }

console.log(adalaber2);

adalaberText.innerHTML += adalaber2.showBio();



