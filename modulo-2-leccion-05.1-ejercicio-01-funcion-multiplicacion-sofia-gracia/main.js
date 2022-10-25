'user strict';

//función multiplicación

function mult (a,b){
    return a*b;
}
const result =mult (7,4)

//función media
function media (a,b,c,d){
    return (a+b+c+d)/4;
}
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


