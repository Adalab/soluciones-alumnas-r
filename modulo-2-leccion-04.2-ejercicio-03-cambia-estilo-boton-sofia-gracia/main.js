"use strict";

const button= document.querySelector(".button"); //llamar al botón
button.classList.add("inactive");

button.addEventListener('click', () => {        
    button.classList.toggle("active");
    
});

/*activa y desactiva la clase cada vez q le das al botón, 
tienes que tener en cuenta el orden del css y poner esta clase de activado detrás
para que machaque a la clase que ya tiene el botón*/


//siguiente ejercicio

const text= document.querySelector(".text");
text.addEventListener('click', () => {        
    text.innerHTML=`${text.innerHTML}Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat. Quibusdam quidem
    pariatur, ipsum fuga, repellat sapiente tenetur ex modi similique ea, nisi incidunt quas doloremque et fugit
    deserunt delectus.`;
    
});

