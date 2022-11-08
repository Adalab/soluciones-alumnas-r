"use strict";

//CONSTANTES

const btnSelect = document.querySelector('.select')
const selectOption = document.querySelector('.option')
const image = document.querySelectorAll(".img");

//FUNCIÓN MANEJADORA

function handleSelector(ev){
  const elementSelected = ev.target; //Evento target para decir que selecciones el elemento dónde hago click. 
  console.log('he hecho click'); 

  //condicional: "si elijo esta opción, quiero que se muestre x, sino x, sino x"

  if (elementSelected.value === "madrid") {
    for (const item of image) { //Bucle for of para recorrer los tres elementos que tengo. Así en todas las opciones

      item.src =
      "https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ; //pinto en pantalla la foto que quiero que salga cuando pincho en esta opción escribiendo la constante (item) y la propiedad que quiero cambiar (el src de la foto). Así en todas las opciones
    }

  } else if (elementSelected.value === "paris") {
    for (const item of image) {

      item.src =
      "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ;
    }

  } else if (elementSelected.value === "ny") {
    for (const item of image) {

      item.src =
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ;
    }
  };
}

//EVENTO

btnSelect.addEventListener('click', handleSelector);

