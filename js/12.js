
//"use strict";
let producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);