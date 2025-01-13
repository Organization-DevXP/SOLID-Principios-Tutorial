// Interfaz que todos los tipos de envío deben implementar
class TipoEnvio {
    calcularCosto(peso) {
        throw new Error('Método calcularCosto debe ser implementado');
    }
}

// Clase para Envio Estándar
class EnvioEstandar extends TipoEnvio {
    calcularCosto(peso) {
        return peso * 5; // Costo para envíos estándar
    }
}

// Clase para Envio Urgente
class EnvioUrgente extends TipoEnvio {
    calcularCosto(peso) {
        return peso * 10; // Costo para envíos urgentes
    }
}

// Clase para Envio Express
class EnvioExpress extends TipoEnvio {
    calcularCosto(peso) {
        return peso * 20; // Costo para envíos express
    }
}

// Clase que utiliza la estrategia para calcular el costo de envío
class Envio {
    constructor(tipoEnvio, peso) {
        this.tipoEnvio = tipoEnvio;
        this.peso = peso;
    }

    calcularCosto() {
        return this.tipoEnvio.calcularCosto(this.peso);
    }
}

// Ejecución del código refactorizado
const envio1 = new Envio(new EnvioEstandar(), 2);
console.log(`Costo de envío estándar: $${envio1.calcularCosto()}`);

const envio2 = new Envio(new EnvioUrgente(), 1);
console.log(`Costo de envío urgente: $${envio2.calcularCosto()}`);

const envio3 = new Envio(new EnvioExpress(), 3);
console.log(`Costo de envío express: $${envio3.calcularCosto()}`);
