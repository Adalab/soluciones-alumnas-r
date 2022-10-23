"use strict";

function precio(cantidad) {
  const precioSin = cantidad;
  const iva = cantidad * 0.21;
  const total = cantidad + iva;
  return 'Precio sin IVA: ' + cantidad + ', IVA: ' + iva +  ' y Total: ' + total;
}

// Declaración de las variables
const cantidad = 25;

// Llamada a la función
precio(cantidad);
console.log(precio(cantidad));