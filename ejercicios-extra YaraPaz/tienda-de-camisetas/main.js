'use strict';

//Fetch

// ('https://beta.adalab.es/ejercicios-extra/api/eshop/v1/cart.json')
let products = [];

function getAPICart() {
  console.log('pido los datos');
  // fetch('./api/data.json') //No me funciona la api local (¿lo veremos hoy en la clase invertida?)
  fetch('http://127.0.0.1:5500/api/data.json')
    .then(function (response) {
      console.log('los convierto de texto plano a json de nuevo');
      return response.json();
    })
    .then(function (data) {
      console.log(
        'accedo al array de objetos dentro y lo guardo en mi array vacío anteriormente declarado'
      );
      products = data.cart.items; //asi llegamos hasta el array de objetos con el queremos operar
      console.log(
        'mando llamar las funciones que pintarán esos datos en la página siguiendo x pasos y reglas'
      );
      paintTshirts();
      paintCartItems();
    });
}

getAPICart(); //Importante. Si creo la función pero nunca la invoco no sirve para nada

//Elements
const newTshirtsSection = document.querySelector('.js_Tshirts');
const shoppingCart = document.querySelector('.js_cart');
const userAddress = document.querySelector('.js_address');
const userCity = document.querySelector('.js_city');
const userZip = document.querySelector('.js_zip');
const sendText = document.querySelector('.js_text');

//Tshirt 1
// const tshirt_1 = {
//   name: 'Gatincho escondido',
//   price: 12.5,
//   img: './images/gatito-1.jpg',
//   quantity: 1,
//   incQuantity: incQuantityFunction,
//   decQuantity: function (product) {
//     if (product.quantity > 0) {
//       product.quantity -= 1;
//     }
//   },
// };
//Puedo desarrollar la función como método dentro del mismo objeto o crearla fuera y dentro del objeto llamarla.

//Tshirt 2
// const tshirt_2 = {
//   name: 'Gatincho feliz',
//   price: 12.0,
//   img: './images/gatito-2.jpg',
//   quantity: 1,
//   decQuantity: function () {
//     if (this.quantity > 0) {
//       this.quantity -= 1;
//     }
//   },
// };

//Products array
//Array con elementos específicos con su nombre de objeto
// const products = [tshirt_1, tshirt_2];

//array de raiz plana en el que los objetos no tienen nombre, se accede a ellos por su posición
// const products = [
//   {
//     name: 'Gatincho escondido',
//     price: 12.5,
//     img: './images/gatito-1.jpg',
//     quantity: 1,
//     incQuantity: incQuantityFunction,
//     decQuantity: function (product) {
//       if (product.quantity > 0) {
//         product.quantity -= 1;
//       }
//     },
//   },
//   {
//     name: 'Gatincho feliz',
//     price: 12.0,
//     img: './images/gatito-2.jpg',
//     quantity: 1,
//     decQuantity: function () {
//       if (this.quantity > 0) {
//         this.quantity -= 1;
//       }
//     },
//   },
// ];

//Delivery
const userInfo = {};

//Functions

//Tshirts section

function renderTshirt(tshirt) {
  let newTshirt = `<article class="article">`;
  newTshirt += `<img class="image" src="${tshirt.imageUrl}" alt="${tshirt.name}">`;
  newTshirt += `<h3 class="title">${tshirt.name}</h3>`;
  newTshirt += `<p>${tshirt.price}</p>`;
  newTshirt += `<span>-----</span>`;
  newTshirt += `<button>Añadir a la cesta</button>`;
  newTshirt += `</article>`;

  return newTshirt;
}

function paintTshirts() {
  //Bucle con un for ... of
  let tshirt = ''; //se declara fuera porque la utilizaré fuera del for y porque sino en cada vuelta del for se machacará el codigo y lo que quiero es que se sume el codigo
  for (const product of products) {
    //para nombre de constante se suele utilizar o item o el nombre del array en singular
    tshirt += renderTshirt(product);
  }
  newTshirtsSection.innerHTML = tshirt;
  // const newTshirt1 = renderTshirt(tshirt_1);
  // const newTshirt2 = renderTshirt(tshirt_2);
}

//Cart section
function renderCartItem(tshirt) {
  let newCartItem = `<tr>`;
  newCartItem += `<td>${tshirt.name}</td>`;
  newCartItem += `<td>${tshirt.price}</td>`;
  newCartItem += `<td>`;
  newCartItem += `<button class="js_btn_dec">-</button>`;
  newCartItem += `${tshirt.quantity}`;
  newCartItem += `<button class="js_btn_inc">+</button>`;
  newCartItem += `</td>`;
  newCartItem += `<td>${tshirt.price * tshirt.quantity}</td>`;
  return newCartItem;
}

function renderTotalPrice(totalPrice) {
  let totalRow = ``;
  totalRow += `<tr>`;
  totalRow += `<td colspan='3'>Total</td>`;
  totalRow += `<td>${totalPrice}</td>`;
  totalRow += `</tr>`;
  return totalRow;
}

function getFinalPrice() {
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }
  return total;
}
function getCartTotal() {
  let total = ``;
  total += `<tr>`;
  total += `<td colspan='3'>Total</td>`;
  total += `<td>${getFinalPrice()}€</td>`;
  total += `</tr>`;
  return total;
}

function paintCartItems() {
  //Bucle clásico
  shoppingCart.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    shoppingCart.innerHTML += renderCartItem(products[i]);
  }
  shoppingCart.innerHTML += getCartTotal();
  listenCartButtons();
  // const finalPrice =
  //   tshirt_1.price * tshirt_1.quantity + tshirt_2.price * tshirt_2.quantity;
  // const product1 = renderCartItem(tshirt_1);
  // const product2 = renderCartItem(tshirt_2);
  // const total = renderTotalPrice(finalPrice);
  // shoppingCart.innerHTML = product1 + product2 + total;

  //Debo meter esta función de escucha aquí para completar el circulo constante de suma de cantidades
  //si pongo esta función fuera el flujo es el siguiente: se pinta la cesta, se escucha el boton, haciendo click se pinta una nueva cesta llamando de nuevo a la funcion y FIN. Aunque vuelva a hacer click ya no volverá a activarse el click.
  //Para que se active sin fin debemos: pintar la cesta, dentro de este pinta escuchamos el boton, incrementamos o decrementamos dependiendo de su if y volvemos a pintar la cesta hasta el fin de los tiempos
}

function incQuantity(product) {
  product.quantity += 1;
}

function decQuantity(product) {
  if (product.quantity > 0) {
    product.quantity -= 1;
  }
}

function handleQuantityBtn(ev) {
  const clickedBtn = ev.currentTarget;
  if (clickedBtn.classList.contains('js_btn_inc')) {
    incQuantity(products[0]);
    //Aunque aquí ponga que no lo reconoce, sí lo reconoce y funciona. No hacer caso si está introducido dentro del objeto
  } else {
    decQuantity(products[0]);
  }
  paintCartItems(); //fuera del If para que se decida lo que se decida en el if se pinta la selección final
}

function listenCartButtons() {
  const btnIncrement = document.querySelector('.js_btn_inc');
  const btnDecrement = document.querySelector('.js_btn_dec');
  //Debo llamar aquí a los botones, despues de su creacion con la invocación de la funcion pintadora de elementos del carrito porque hasta este momento no existian pero ahora sí existen
  btnIncrement.addEventListener('click', handleQuantityBtn);
  btnDecrement.addEventListener('click', handleQuantityBtn);
}

function handleSendInfo(ev) {
  const inputName = ev.currentTarget.name;
  userInfo[inputName] = ev.currentTarget.value;
  //Como lo hizo Ivan. Aqui utilizo un atributo gancho. Le paso como nombre de la propiedad de ese nuevo objeto vacío declarado anteriormente el vvalor del atributo name de mi inpuyt, que resulta que tiene el mismo nombre que la propiedad que queremos meterle. Después le metemos como valor el value del input que es lo que se ha recogido del evento de tipo input.

  //Forma larga y básica.
  //   if (ev.currentTarget.classList.contains('js_address')) {
  //     userInfo.address = ev.currentTarget.value;
  //   } else if (ev.currentTarget.classList.contains('js_city')) {
  //     userInfo.city = ev.currentTarget.value;
  //   }
  paintSendInfo();
}

function paintSendInfo() {
  sendText.innerHTML = userInfo.address + userInfo.city + userInfo.zip;
}

//Events
// paintTshirts();
// paintCartItems();
userAddress.addEventListener('input', handleSendInfo);
userCity.addEventListener('input', handleSendInfo);
userZip.addEventListener('input', handleSendInfo);
