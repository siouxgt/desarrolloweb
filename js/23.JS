const MetodoPago = 'cheque';

switch(MetodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
            break;
            case 'cheque':
            console.log('Aun no has pagado ');
            break;
    case 'efectivo':
            console.log('pagaste con efectivo');
            break;
            default:
            console.log('El usuario va a pagar con cheque, revisaremos los fondos');
            break;
}