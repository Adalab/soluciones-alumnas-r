'user strict'

const boxBorder = true;
const padding = 5;
const border = 10;
const width = 100;

function boxSize (){
    const notContent= padding+border; 
    
    if (boxBorder) {
        const content = (width - notContent);
        console.log (`El ancho del contenido es: ${content} y el ancho total de la caja es: ${width}`);
    }else {
        const box = (width + notContent);
        console.log (`El ancho del contenido es: ${width} y el ancho total de la caja es: ${box}`);
    }
}
console.log (boxSize ());

