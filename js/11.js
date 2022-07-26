const producto = {
    nombreProducto: "Monitor de 40 pulgadas",
    disponible: true,
    precio: 300

}


/* const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto; */

/* console.log(precioProducto);
console.log(nombreProducto); */


//Destructuring
const{precio, nombreProducto} = producto;


console.log(precio);
console.log(nombreProducto);