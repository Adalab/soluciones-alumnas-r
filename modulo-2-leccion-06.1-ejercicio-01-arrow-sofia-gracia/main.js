'user strictS'

//cambiando las funciones de la leccion anterior a arrow

const par = (a) => a%2===0
    

//función super util para quitar los query.selector. no conseguía que funcionara el if, entiendo que tiene que ser así, si la constante es falsy (está vacía) entonces ejecuta el if.

const getEl = a => { //no hace falta paréntesis porque solo hay un valor    
    const element = document.querySelector(a);
    
   if (!element){
        console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`)
    }
    return element;
}

//combinar las 2 funciones, eliges del HTML el número, lo convierte en número y avisa si es par o no.

const element = getEl ('.paragraph').innerHTML;
const number = parseInt(element) ;
const result = par(number);
if (result){
    console.log('este número es par');
}else {
    console.log('este número es impar');
}

//función multiplicación

const mult = (a,b) => a*b; 
    
const result2 = mult (7,4)

//función media
const media = (a,b,c,d) =>(a+b+c+d)/4;

const mediaReturn = media (10,10,10,10)

//función ticket con IVA

//como se consolea una función

function iva (){
    const price = 20;
    const totalPrice = price * 1.21;
    return totalPrice;    
}
console.log (iva());


//modo mejor, para poder cambiar el precio siempre solo cambiando la constante de price2 que está fuera.

function iva2 (price2){    
    const totalPrice = price2 * 1.21;   
    const ivaPrice = price2*0.21;
    console.log (`el precio sin IVA es ${price2}, el IVA es ${ivaPrice} y el precio total es ${totalPrice}`);    
}
const price2 = 20;
console.log (iva2(price2));
