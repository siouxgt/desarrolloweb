/*  const puntaje = 100;

 if(puntaje !== 100)
 console.log('No es igual')
 else{
     console.log('Si el puntaje es 1000');
    } */


    const efectivo = 1000;
    const carrito = 800;
        

   /*  if(efectivo > carrito) {
        console.log('el usuario puede pagar');
    } else {
        console.log('Fondos Insuficientes');
    } */

    const rol = 'EDITOR';

    if(rol === 'ADMINISTRADOR'){
        console.log('Acceso a todo el sistema');

    } else if (rol === 'EDITOR'){
        console.log('Eres editor y no puedes tener todo el acceso');
    } else {
        console.log('No tienes acceso')
    }
    


 