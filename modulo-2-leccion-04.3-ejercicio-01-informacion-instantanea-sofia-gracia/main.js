'use strict'
const name = document.querySelector (".name");
const text = document.querySelector (".text");


name.addEventListener('keyup',()=>{
    const nameValue = name.value;   
    text.innerHTML=(nameValue);
    
});
//siguiente ejercicio

const btn1 = document.querySelector(".js-btn1");
const btn2 = document.querySelector(".js-btn2");
const container = document.querySelector(".js-div");
/*como en el ejercicio solo se puede poner un evento de escucha, lo
pones en el contenedor y luego ajustas con target, 
que marca específicamente que elemento se está pinchando, en vez del div
se podía haber usado main o body*/

container.addEventListener('click', (event)=>{
    event.preventDefault();        
    if (btn1 === event.target){
        btn1.classList.toggle("btn-on");    
    } else if (btn2 === event.target) {
        btn2.classList.toggle("btn-on");  
    }
});
    
