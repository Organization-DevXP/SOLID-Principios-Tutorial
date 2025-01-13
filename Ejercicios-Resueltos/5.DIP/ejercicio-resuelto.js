// Código inicial (antes de aplicar DIP)

class CreditCardService {
    procesarPago(cantidad) {
        console.log(`Procesando pago con tarjeta de crédito por $${cantidad}`);
    }
}

class EfectivoService {
    procesarPago(cantidad) {
        console.log(`Procesando pago en efectivo por $${cantidad}`);
    }
}

class PaymentProcessor {
    constructor(service) {
        this.service = service;
    }

    procesar(cantidad) {
        console.log("Iniciando procesamiento de pago...");
        this.service.procesarPago(cantidad);
    }
}

// Uso
const creditCardService = new CreditCardService();
const efectivoService = new EfectivoService();

const procesador = new PaymentProcessor(creditCardService);
procesador.procesar(100);

const procesador2 = new PaymentProcessor(efectivoService);
procesador2.procesar(100);
