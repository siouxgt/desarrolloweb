//this

/* const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo  y su cantidad a pagar es de ${this.total}`);
    }

}


reservacion.informacion(); */

const producto = {
    nombre: 'tablet',
    precio: 500
} 

//object constructor

 function Producto(nombre, precio,) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor curvo de 49', 800);
const producto3 = new Producto('Laptop', 300);

function formatearProducto(producto){
    return `${producto.nombre} tiene un precio de: $${producto.precio}`;
}

console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2));