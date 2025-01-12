// Código inicial (sin aplicar SRP, OCP ni ISP)

class ProcesadorDePagos {
    constructor() {
        this.metodosDePago = [];
    }

    agregarMetodoDePago(metodo) {
        this.metodosDePago.push(metodo);
    }

    procesarPago(metodo, monto) {
        if (metodo === 'tarjeta') {
            console.log(`Procesando pago de $${monto} con tarjeta de crédito.`);
            // Lógica específica para tarjeta de crédito
        } else if (metodo === 'paypal') {
            console.log(`Procesando pago de $${monto} con PayPal.`);
            // Lógica específica para PayPal
        } else if (metodo === 'criptomoneda') {
            console.log(`Procesando pago de $${monto} con criptomonedas.`);
            // Lógica específica para criptomonedas
        } else {
            console.log('Método de pago no soportado.');
        }
    }

    generarRecibo(monto, metodo) {
        console.log(`Recibo generado: Pago de $${monto} mediante ${metodo}.`);
    }
}

// Ejecución del código inicial
const procesador = new ProcesadorDePagos();
procesador.procesarPago('tarjeta', 100);
procesador.procesarPago('paypal', 200);
procesador.generarRecibo(100, 'tarjeta');
