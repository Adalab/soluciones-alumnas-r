const container=document.querySelector(".container"); //llamar al contenedor

container.classList.add("big"); //esto es mejor dejarlo, porque si no solo se pone el fondo azul al activar el scroll

window.addEventListener('scroll', (event) => { //escucha el scroll en la ventana
    if (window.scrollY>250){                   //mire el desplazamiento vertical, el eje de las Y
    container.classList.add("big");
    
    }else {
        container.classList.remove("big");
        container.classList.add("small");
    }
});
//ejercicio con las propiedades de los eventos
const buttonElement = document.querySelector(".button");

buttonElement.addEventListener("click", ()=>{
  console.log(event.currentTarget);
});
