'use strict';

// Mostrar una frase que indique cuántas tareas hay.
// Pintar todas las tareas en pantalla.
// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.

//Elements
const list = document.querySelector('.js_list');
const trackText = document.querySelector('.js_text');
let completed = 0;
let toDo = 0;
let tasks = [];

//Fetch
const tasksLS = JSON.parse(localStorage.getItem('tasks'));
if (tasksLS != null) {
  tasks = tasksLS;
  paintTask(); //siempre que recuperamos valores debemos pintarlos
} else {
  getTasks();
}

function getTasks() {
  fetch('https://dev.adalab.es/api/todo')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      tasks = data.results; //siempre ponerlo en este orden, nunca al revés. Ponemos data results porque es la forma de acceder a la info de la api
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].index = i;
      }
      paintTask();
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
}

//Functions
function handleClick(ev) {
  let clickedEl = ev.currentTarget.id; //como he amañado que el id del elemento sea igual a su posición puedo acceder a él con el currentTarget y aplicarlo abajo para decirle...
  tasks[clickedEl].completed = !tasks[clickedEl].completed; //que en el array de tasks en la posicion del elemento clickado (que resulta que coincide con la de su id. Atributo gancho) me cambie su completed de true a false (como son valores booleanos podemos hacer esto, sino tendriamos que crear un castillote de ifs)
  paintTask(); //Una vez la propiedad de uno de los elemento se ha visto alterada vuelvo a repintar la lista con los cambios que he hecho para que se reflejen
}

function checkUncheck() {
  const inputList = document.querySelectorAll('.checkbox'); //Importante recoger aqui,y no fuera, el array de inputs, ya que necesitamos que se recoja según lo cree la función pintadora. Por eso esa función irá dentro de la función pintadora.
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('click', handleClick); //recorro el array y a cada input le aplico en esa posicion x por la que pase un evento manejador de click
  }
}

//UTILIZANDO METODOS DE ARRAYS
function paintTask() {
  //Para volver a pintarla desde la funcion de "checkUncheck" tengo que resetear todos los valores para evitar concatenaciones infinitas.
  list.innerHTML = '';
  completed = 0;
  toDo = 0;

  //Vuelvo a pintarlo todo como si no hubiera pasado nada aplicando los cambios de la función checkUncheck
  let listItem = ''; //Declaro esta variable para almacenar los elementos de lista que luego pintaré en el html al final del todo con un += para que se añadan uno detrás de otro y no se sobreescriban
  let checkboxInput = ''; //Declaro esta variable para almacenar los elementos checkbox de cada LI tarea
  let finalListItem = ''; //Declaro esta variable para almacenar el resultado final que quiero imprimir
  //Vuelvo a recorrer los elementos con sus nuevas propiedades complete[ESTO CUANDO VENGO DE LA FUNCION CHECKUNCHECK]

  const completedTasks = tasks.filter((task) => task.completed === true);
  const toDoTasks = tasks.filter((task) => task.completed === false);

  const completedTasksHTML = completedTasks
    .map((task) => {
      listItem = `<li class="list_item crossed">${task.name}</li>`;
      checkboxInput = `<label for="checkbox"><input class="checkbox" id="${task.index}" checked type="checkbox" value="completed"/>Completed</label>`;
      finalListItem = listItem + checkboxInput;
      completed++;
      return finalListItem;
    })
    .join('');

  const toDoTasksHTML = toDoTasks
    .map((task) => {
      listItem = `<li class="list_item">${task.name}</li>`;
      checkboxInput = `<label for="checkbox"><input class="checkbox" id="${task.index}" type="checkbox" value="completed"/>Completed</label>`;
      finalListItem = listItem + checkboxInput;
      toDo++;
      return finalListItem;
    })
    .join('');

  list.innerHTML = completedTasksHTML + toDoTasksHTML;
  trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`;
  checkUncheck();
}

paintTask();

//SIN UTILIZAR METODOS DE ARRAYS / CON BUCLES

//function PaintTask() {
// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i].completed) {
//se puede poner esto o como puse antes tasks[i].completed === true. Si es true hará lo de abajo, pero así ahorro código
// listItem = `<li class="list_item crossed">${tasks[i].name}</li>`;
// checkboxInput = `<label for="checkbox"><input class="checkbox" id="${i}" checked type="checkbox" value="completed"/>Completed</label>`;
// finalListItem = listItem + checkboxInput; //porque quiero que vayan juntos al final, no cada uno por su lado.
//   completed++;
// } else {
//   listItem = `<li class="list_item">${tasks[i].name}</li>`;
//   checkboxInput = `<label for="checkbox"><input class="checkbox" id="${i}" type="checkbox" value="completed"/>Completed</label>`;
//   finalListItem = listItem + checkboxInput;
//   toDo++;
// }
// list.innerHTML += finalListItem; //meterlo dentro del for me asegura que dentro del innerhtml me irá pintando lo que vaya recogiendo en listItem según recorre el bucle. Si lo coloco fuera cogerá el valor undefined de listitem declarado arriba del todo porque no cogerá los valores generados por el bucle
// trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`; //Importante meter esto dentro del bucle por lo mismo que la linea de arriba
// }
// checkUncheck(); //meto aqui de nuevo el evento de escucha para que una vez se creen los elementos en el DOM pueda volver a interactuar sobre ellos otra vez, como el carrito de la compra del ejercicio de la tienda de camisetas. Esta lista es completamente nueva por lo que los inputs que llamará serán completamente nuevos y tengo que llamarlos desde esta misma función. ¿ùedo llamar a los inputs fuera y marcar la funcion fuera? SI, pero entonces solo se ejecutará una vez y ya está, no infinitamente como quiero que sea. Necesita estar aqui para recoger los nuevos elementos cada vez
// }

// paintTask(); //Una vez invoco a la función todo lo que tuviera que imprimir esta función quedará ya impreso en el DOM. Así podré llamar, con las clases que les he proporcionado, a los nuevos elementos creados
//Crear funciones que impriman elementos en el DOM e invocarlas es una buena forma de crear elementos html a través de JS y después poder acceder a ellos como si siempre hubieran estado ahí en el html impresos desde el principio

//SIN FUNCIONES CHECK-UNCHECK

//EVENTS
//Event - check & uncheck task when clicking checkbox
//Llamo con queryselectorAll
//Estas constantes deben declararse aquí, justo cuando la función ha sido invocada y los elementos creados, sino no me hará el query selector. Muy importante su ubicación.

// for (let i = 0; i < inputList.length; i++) {
//   inputList[i].addEventListener('click', handleClick); => {
//     if (inputList[i].checked === true) {
//       itemsList[i].classList.add('crossed');
//       completed++;
//       toDo--;
//       trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`;
//     } else {
//       itemsList[i].classList.remove('crossed');
//       toDo++;
//       completed--; //Cuando haga check y uncheck el listado de completadas decrece y el de no completadas crece respectivamente, por eso debo incluir esto
//       trackText.innerHTML = `Tienes ${tasks.length} tareas. ${completed} completadas y ${toDo} por realizar.`;
//     }
//   });
// }
//Este evento no puede tener función manejadora porque sino la "i" que indica la posición dejaría de tener sentido y no valdría nada en la función manejadora. Todo debe encontrarse dentro del bucle
