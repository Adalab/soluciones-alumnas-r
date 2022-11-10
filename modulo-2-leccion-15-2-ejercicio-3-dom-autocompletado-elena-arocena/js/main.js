'use strict'

//CONSTANTES

const form = document.querySelector('.form');
const inputName = document.querySelector('.inputName');
const inputLastName = document.querySelector('.inputLastName');
const inputPhone = document.querySelector('.inputPhone');
const selectName = document.querySelector('.selectName');

//Tenemos que crear un listado de 3 objetos, cada uno con nombre apellidos y teléfono.

const informationUser = [ //ARRAY DE OBJETOS
  //OBJETO 1
  { 
    name: 'Ana',
    lastName: 'Martínez',
    phone: 123456789 ,
  },
  //OBJETO 2
  {
    name: 'Lucía',
    lastName: 'Garrido',
    phone: 987654321 ,
  },
  //OBJETO 3
  {
    name: 'Matilde',
    lastName: 'Cano',
    phone: 246813579 ,
  },

]

//Nos piden que con JavaScript creemos un select que permita elegir a la usuaria y rellene la información de la misma automaticamente. Para ello:
//1- Bucle for para crear los elementos. Utilizo "informationUser" porque quiero coger los elementos de mi array.

for (const item of informationUser) { 
  const newItem = document.createElement("option"); // Creamos un elemento nuevo, un <option>
  const newContent = document.createTextNode(item.name); // Le pedimos que dentro del option aparezca el name del array de objetos que hemos creado.
  newItem.appendChild(newContent); // Y se lo añadimos a nuestro <option> con appendChild()
  selectName.appendChild(newItem); //.appendChild() nos permite añadir elementos a nuestra web, pintamos dentro de nuestro <option> los nombres de 'Ana, Lucía y Matilde'
}

//FUNCION MANEJADORA
//2-Con nuestra función manejadora pintaremos estos datos en pantalla. 

function handleUser (ev){
  
  for (const item of informationUser){  ////Bucle for of para recorrer los tres elementos que tengo, cojo información del array
  
    const userChoice = ev.target; //Evento target para decir que selecciones el elemento dónde hago click. 
    
    if (userChoice.value === item.name) { //si el valor sobre lo que hago click es igual al nombre (Ana, Lucía y Matilde), pintame toda la información (los valores) de ese nombre. 
      inputName.value = item.name;
      inputLastName.value = item.lastName;
      inputPhone.value = item.phone;
    }
  }

};

//EVENTOS
selectName.addEventListener('click',handleUser);

