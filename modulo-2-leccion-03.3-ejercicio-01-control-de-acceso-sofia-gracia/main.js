//llamar al input, por la id, pero no soy capaz de recuperar el value, siempre me sale undefined.

/*let name = document.getElementById('name').value; 

if (name === "María"|| name === "Luisa") {
    console.log(`bienvenida ${name}`);
}else {
    console.log("usuaria no autorizada");
}*/





//esto funciona sin nada más, en la consola y cambiando aquí el nombre
/*let name = "Luisa";

if (name === "María"|| name === "Luisa") {
    console.log(`bienvenida ${name}`);
}else {
    console.log("usuaria no autorizada");
}*/

/*formulario en clase*/

const day = document.querySelector ('.js-day');
const month = document.querySelector ('.js-month');

//aquí sería buena practica hacer un console.log para saber que está llamando correctamente

const msj = document.querySelector ('.msj');

//al venir de HTML el value serán strings no números, así que hay que cambiar el tipo de datos

const dayValue = parseInt(day.value); //vale para números enteros y solo transforma strings que ya son números en números (no transforma María en número, ni 12.5, lo redondearía)
const monthValue = parseInt (month.value);

if (dayValue === 25 && monthValue ===12 ) {
    msj.innerHTML= "Feliz Navidad";
    msj.classList.add('red')
} else if (dayValue === 1 && monthValue ===1 ) {
    msj.innerHTML= "Feliz Año Nuevo";
} else if (dayValue === 9 && monthValue ===11 ) {
    msj.innerHTML= "Hoy es la Almudena"; 
} else {
    msj.innerHTML= "Hoy toca trabajar"; 
}

//ejercicio en clase, de evento y escucha

const nameInput = document.querySelector(".name__test");
const buttonTest = document.querySelector(".js-button");
const result = document.querySelector(".js-result");
const priceInput = document.querySelector(".js-price");
let desc = "";
/*para estar pendiente de cuando la usuaria escriba existe el evento "keyUp", listener es para todos los tipos de eventos que puedan darse que hay muchos
Los más usados son click, keyup, submit, change, */

nameInput.addEventListener("keyup", ()=>{
    console.log(nameInput.value); //siempre tomar los value cuando sucede el evento, porque antes de teclear el value será 0 patatero y no nos interesa eso.
});

buttonTest.addEventListener('click', ()=>{
    const nameValue= nameInput.value;
    const priceValue= parseInt(priceInput.value);//lo convertimos en números pero no operaremos con el, funcionaría igual sin ello.
   
    if (priceValue>100){
        desc = "10%";
    }else{
        desc="5%";
    }
    result.innerHTML=`bienvenida ${nameValue}, tienes ${desc} de descuento`;
});

/*esta condicional se podría hacer con los ternarios:
let desc =priceValue> ? "10%" : "5%";
el ? es el if y : es el else*/

