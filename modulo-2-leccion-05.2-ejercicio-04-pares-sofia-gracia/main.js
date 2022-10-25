'user strictS'

//funcion para que de true si un número es par

function par (a){
    return a%2===0
}

//función super util para quitar los query.selector. no conseguía que funcionara el if, entiendo que tiene que ser así, si la constante es falsy (está vacía) entonces ejecuta el if.

function getEl(a){     
    const element = document.querySelector(a);
    
   if (!element){
        console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`)
    }
    return element;
}

//combinar las 2 funciones, eliges del HTML el número, lo convierte en número y avisa si es par o no.

const number = parseInt (getEl ('.paragraph').innerHTML);//conviertes en número el HTML todo en la misma línea, fantasía

const result = par(number);

if (result){
    console.log('este número es par');
}else {
    console.log('este número es impar');
}