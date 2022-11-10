'use strict';

//1. Bio de Adalabers

const adalaber1 = {
    name: 'Susana',
    age: '34 años',
    job: 'periodista'
}

const adalaberText = document.querySelector('.text-list');

adalaberText.innerHTML = `<li>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}.</li>`;


function adalabersData (name, age, job){
	const adalaber = {
        name : name,
	    age : age,
	    job : job

    }
    return adalaber;
};

const adalaber2 = adalabersData('Rocío', '25 años', 'actriz');
console.log(adalaber2);

adalaberText.innerHTML += `<li>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}.</li>`;

//2. A la carrera

//Añado la propiedad distance al objeto
adalaber1.distance = '50km';
console.log (adalaber1);

//Añado métodos que me piden e incluyo la nueva propiedad del objeto
adalaber1.run = () => console.log('Estoy corriendo');
adalaber1.runAMarathon = () => console.log(`Estoy corriendo un maratón de ${adalaber1.distance} kilómetros`);

adalaber1.run();
adalaber1.runAMarathon();

