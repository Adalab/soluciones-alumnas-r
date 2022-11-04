'use strict';

//Añade parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &

//Número entre 0 y 100
fetch ('https://api.rand.fun/number/integer?min=0&max=100')
    .then ((response)=> response.json())
    .then ((data)=>(document.querySelector('.num1').innerHTML = data.result));

//Número máximo 100

fetch ('https://api.rand.fun/number/integer?max=10')
    .then ((response)=> response.json())
    .then ((data)=>(document.querySelector('.num2').innerHTML = data.result));


