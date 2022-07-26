//Arrow function

/* const sumar1 = function(n1, n2) {
    console.log(n1+n2);
} */
const sumar1 = (n1, n2) => console.log(n1+n2);

sumar1(10, 18);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);


aprendiendo('JavaScript');

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

meses.forEach( mes => {if(mes == 'Marzo'){

        console.log('Marzo si existe');
    }
});



//some ideal para arreglos de objetos

resultado = carrito.some(producto => producto.nombre === 'celular');



//arrow function 

//reduce

/* resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); */

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


//Filter

resultado = carrito.filter(producto => producto.precio > '300');
resultado = carrito.filter(producto => producto.nombre !== 'bocinas');

console.log(resultado);

