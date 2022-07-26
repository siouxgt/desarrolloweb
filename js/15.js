//Array methods

const meses = ['Enero', 'Febrero', 'Marzo',
'Abril', 'Mayo'];

const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'television 20 pulgadas', precio: 400},
    {nombre: 'tablet', precio: 300},
    {nombre: 'audifonos', precio: 200},
    {nombre: 'teclado', precio: 100},
    {nombre: 'celular', precio: 1500},
    {nombre: 'bocinas', precio: 800},
    {nombre: 'laptop', precio: 300},
    {nombre: 'mouse', precio: 50},
    {nombre: 'impresora', precio: 2000},

];

//forecch

meses.forEach(function(mes){
    if(mes == 'Marzo'){

        console.log('Marzo si existe');
    }
});

//includes
let resultado = meses.includes('Marzo');

//some ideal para arreglos de objetos

resultado = carrito.some(function(producto){
    return producto.nombre === 'celular'
})

//arrow function 

//reduce

/* resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); */

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);



//Filter

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'bocinas'
});

console.log(resultado);