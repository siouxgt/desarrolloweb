//Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.table(numeros);


/* //const meses = ['Enero', 'Febrero', 'Marzo',
'Abril', 'Mayo']; */

/* console.table(meses); */

//acceder a los valores de un arreglo 
/* console.log(numeros[4])
console.log(numeros[2]) */

//const arreglo = ["hola", 10, true, "si", null, {nombre: "juan", trabajo: "programador"},[1,2,3]];


//conocer la extension de un arreglo 

/* console.log(meses.length);

numeros.forEach( function(numero){
    console.log(numero);
}) */

/* numeros[2] = 60;
numeros[6] = 70; */

//agrega al final del arreglo
numeros.push(60,70,80);

//agrega al principio del arreglo

numeros.unshift(-10, -20, -30);

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo',
'Abril', 'Mayo'];

/* meses.pop(); //eliminar el ultimo elemento
meses.shift(); //elimina el primer elemento */

meses.splice(1,1);
console.table(meses);


//Rest perator o spread operator

const nuevoArreglo = [...meses, "junio"];
console.log(nuevoArreglo);


