// Código inicial (sin aplicar SRP, OCP ni ISP)

class ProcesadorDePagos {
    procesarPago(tipo, monto) {
        if (tipo === 'tarjeta') {
            console.log(`Procesando pago con tarjeta. Monto: ${monto}`);
            console.log('Calculando comisión del 2%...');
        } else if (tipo === 'paypal') {
            console.log(`Procesando pago con PayPal. Monto: ${monto}`);
            console.log('Calculando comisión del 3.5%...');
        } else if (tipo === 'transferencia') {
            console.log(`Procesando transferencia bancaria. Monto: ${monto}`);
            console.log('Calculando comisión del 1%...');
        } else {
            console.log('Método de pago no soportado.');
        }
    }
}

// Ejecución del código inicial
const procesador = new ProcesadorDePagos();
procesador.procesarPago('tarjeta', 100);
procesador.procesarPago('paypal', 200);
procesador.procesarPago('transferencia', 300);
