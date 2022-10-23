'use strict';

// Función media

function media(a,b,c,d){
    const sum = a + b + c + d;
    return (sum / arguments.length);
}

// Arguments: keyword para referirse a los argumentos declarados cuando ejecutamos la función (video youtube)

console.log(media(10,10,10,10));

console.log(media(2,3,4,5));

console.log(media(10,15,20,12));


/*Para asegurar que la media se haga sólo con los argumentos a los que se ha definido un valor (y no tenga en cuenta a los que están vacíos), podemos utilizar una función con for:
1. Declarar variables sum y compt dentro de la función, empezamos con un valor = 0
2. For para que vaya cogiendo todos los argumentos declarados
3. Condicional if para asegurar que si hay un argumento vacío no lo tenga en cuenta. Decimos que tiene que ser distinto a null, por lo que tiene que tener un valor, y si lo tiene se suma a la variable let sum declarada, y en compt se suma 1 para que lo tenga en cuenta para obtener la media. 

function media(a,b,c){
    let sum = 0;
    let compt = 0;
    for(var i=0; i<arguments.length; i++){
        if (arguments[i] !== null){
            sum += arguments[i];
            compt += 1;
        }
    }
    return sum/compt;
}

console.log(media (1,3)); // Resultado 2 (4/2)
*/
