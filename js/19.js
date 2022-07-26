/* function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(2, 3);

console.log(resultado); */


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total){
    return 0.16 * total;
}

total = agregarCarrito();




console.log(total);

const totalPagar = calcularImpuesto (total);
console.log(`el total a pagar con impuestos es de: ${totalPagar}`);