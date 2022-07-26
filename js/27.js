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

/* const producto = {
    nombre: 'tablet',
    precio: 500
}  */

//object constructor

 function Cliente(nombre, apellido,) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`
}
const producto2 = new Producto('Monitor curvo de 49', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Noel', 'Tellez');

console.log(cliente);

console.log(producto2);
console.log(producto2.formatearProducto);
console.log(producto3.formatearProducto);