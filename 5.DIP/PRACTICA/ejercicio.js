// Código inicial (antes de aplicar DIP)

class CreditCardService {
    procesarPago(cantidad) {
        console.log(`Procesando pago con tarjeta de crédito por $${cantidad}`);
    }
}

class PaymentProcessor {
    constructor() {
        this.paymentService = new CreditCardService();
    }

    procesar(cantidad) {
        console.log("Iniciando procesamiento de pago...");
        this.paymentService.procesarPago(cantidad);
    }
}

// Uso
const procesador = new PaymentProcessor();
procesador.procesar(100);
