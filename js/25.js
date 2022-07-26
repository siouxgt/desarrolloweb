const carrito = [
    {nombre:'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television de 50 pulgadas', precio: 800},
    {nombre: 'Tablet', precio: 1500},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Teclado', precio: 150},
    {nombre: 'Bocinas', precio: 154},
    {nombre: 'Laptop', precio: 1541},
    {nombre: 'Audifonos', precio: 4896},

];

//forEach

const arreglo1 = carrito.forEach( producto =>  producto.nombre);

//map

const arreglo2 = carrito.map(producto => producto.nombre);


console.log(arreglo1);
console.log(arreglo2);