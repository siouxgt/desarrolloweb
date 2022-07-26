/* for( let i = 1; i <= 100; i++ ) {
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);

    } else {
        console.log(`El numero ${i} es Impar`);
    }
} */

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

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i]);

}


// while loop

/* let i = 0; // indice

while(i < 10){ // condicion

        if(i % 2 === 0){
            console.log(`El numero ${i} es Par`);
        }else {
                console.log(`El numero ${i} es Impar`);

            }

        

    i++; //incremento

} */


//Do while loop

let i = 100;
do {
    console.log(i);
    i++;

}while(1 < 10);