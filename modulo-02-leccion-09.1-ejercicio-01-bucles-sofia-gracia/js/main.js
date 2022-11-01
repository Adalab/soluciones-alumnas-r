for (let i = 1; i <= 10; i++) {
    console.log('Voy por la vuelta ' + i);
  }

  //ejercicio 2, contando de 2 en 2

  let acc =0;
  
  for (let i = 0; i <= 10; i++) {
    acc= acc+2
  }
  console.log (`el resultado es ${acc}`);

  //ejercicio 4 - la medida

  const arr = [6,984,25,37,3096]; //crear array
  

//crear la variable para acumular la suma

 let acc2=0;

/*for (let i = 0; i <arr.length; i++) {
    acc2 +=  arr[i];
  }
const result= acc2/arr.length;
console.log(result);*/

arr [5]= 8923; //ponerle un número más
arr [6] = 10;
/*for (let i = 0; i <arr.length; i++) {
    acc2 +=  arr[i];
  }
const result2= acc2/arr.length;
console.log(result2);*/


//creamos una función que haga esto:

function average (numbers){
    for (let i = 0; i <[numbers.length]; i++) {
        acc2 +=  numbers[i];
      }
      const result= acc2/numbers.length; 
      return result;
};
const arrAverage =average(arr); //guardamos el return de la función
console.log(arrAverage);