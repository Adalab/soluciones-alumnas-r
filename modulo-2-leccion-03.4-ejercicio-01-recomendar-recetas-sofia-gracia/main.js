/*let ingredient="atún";

if (ingredient==="pollo"){
   recipe= "alitas fritas";
   console.log(`tu ingrediente es ${ingredient}, puedes hacer ${recipe}`)

}else if (ingredient==="merluza") {
    recipe="merluza en salsa verde";
    console.log(`tu ingrediente es ${ingredient}, puedes hacer ${recipe}`)
}else if  (ingredient!=="pollo"||ingredient!=="merluza"){
    console.log(`búscate la vida`)
}*/

//lo mismo pero con switch:

let ingredient = 'atún';

switch (ingredient) {
  case 'pollo':
    recipe= "alitas fritas";
    console.log(`tu ingrediente es ${ingredient}, puedes hacer ${recipe}`);
    break;
  case 'merluza':
    recipe="merluza en salsa verde";
    console.log(`tu ingrediente es ${ingredient}, puedes hacer ${recipe}`);
    break;  
  default:
    console.log(`búscate la vida`);
}
