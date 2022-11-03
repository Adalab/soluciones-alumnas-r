'use strict';

// Mostrar una frase que indique cuántas tareas hay.
// Pintar todas las tareas en pantalla.
// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.

//Elements
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
const list = document.querySelector('.js_list');
const trackText = document.querySelector('.js_text');
let completed = 0;
let toDo = 0;

//Functions

//Function - Paint task list in html

function paintTask() {
  let listItem = ''; //Declaro esta variable para almacenar los elementos de lista que luego pintaré en el html al final del todo con un += para que se añadan uno detrás de otro y no se sobreescriban
  let checkboxInput = ''; //Declaro esta variable para almacenar los elementos checkbox de cada LI tarea
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      listItem = `<li class="list_item crossed">${tasks[i].name}</li>`;
      checkboxInput = `<label for="checkbox"><input class="checkbox" id="checkbox" checked type="checkbox" value="completed"/>Completed</label>`;
      listItem += checkboxInput; //porque quiero que vayan juntos al final, no cada uno por su lado. No quiero los LI por un lado y los CHECKBOX por otro
      completed++;
    } else {
      listItem = `<li class="list_item">${tasks[i].name}</li>`;
      checkboxInput = `<label for="checkbox"><input class="checkbox" id="checkbox" type="checkbox" value="completed"/>Completed</label>`;
      listItem += checkboxInput;
      toDo++;
    }
    list.innerHTML += listItem; //meterlo dentro del for me asegura que dentro del innerhtml me irá pintando lo que vaya recogiendo en listItem según recorre el bucle. Si lo coloco fuera entonces cogerá el valor undefined de listitem declarado arriba del todo porque no cogerá los valores generados por el bucle
    trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`; //Importante meter esto dentro del bucle para que al llegar al final me haga esto
  }
}

paintTask(); //Una vez invoco a la función todo lo que tuviera que imprimir esta función quedará ya impreso en el DOM. Así podré llamar, con las clases que les he proporcionado, a los nuevos elementos creados
//Crear funciones que impriman elementos en el DOM e invocarlas es una buena forma de crear elementos html a través de JS y después poder acceder a ellos como si siempre hubieran estado ahí en el html impresos desde el principio

//EVENTS

//Event - check & uncheck task when clicking checkbox
const inputList = document.querySelectorAll('.checkbox');
const itemsList = document.querySelectorAll('.list_item'); //Estas constantes deben declararse aquí, justo cuando la función ha sido invocada y los elementos creados, sino no me hará el query selector. Muy importante su ubicación.

for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener('click', () => {
    if (inputList[i].checked === true) {
      itemsList[i].classList.add('crossed');
      completed++;
      toDo--;
      trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`;
    } else {
      itemsList[i].classList.remove('crossed');
      toDo++;
      completed--; //Cuando haga check y uncheck el listado de completadas decrece y el de no completadas crece respectivamente, por eso debo incluir esto
      trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`;
    }
  });
}
//Este evento no puede tener función manejadora porque sino la "i" que indica la posición dejaría de tener sentido y no valdría nada en la función manejadora. Todo debe encontrarse dentro del bucle
