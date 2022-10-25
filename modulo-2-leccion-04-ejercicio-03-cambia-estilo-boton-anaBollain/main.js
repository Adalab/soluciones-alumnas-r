'use strict';

const buttonElement = document.querySelector('.button');

//Con classList.add y remove
/*buttonElement.addEventListener ('click', ()=> {
   if(buttonElement.classList.contains('buttonUpdate') === false){
      buttonElement.classList.add('buttonUpdate');
   } else{
      buttonElement.classList.remove('buttonUpdate');
   }
});*/

// Con classList.toggle
buttonElement.addEventListener ('click', ()=> {
      buttonElement.classList.toggle('buttonUpdate');
   });
