// Código inicial (sin refactorizar)

class Envio {
    constructor(tipo, peso) {
        this.tipo = tipo;
        this.peso = peso;
    }

    calcularCosto() {
        if (this.tipo === 'estandar') {
            return this.peso * 5; // Costo para envíos estándar
        } else if (this.tipo === 'urgente') {
            return this.peso * 10; // Costo para envíos urgentes
        } else if (this.tipo === 'express') {
            return this.peso * 20; // Costo para envíos express
        } else {
            throw new Error('Tipo de envío no soportado');
        }
    }
}

// Ejecución del código inicial
const envio1 = new Envio('estandar', 2);
console.log(`Costo de envío estándar: $${envio1.calcularCosto()}`);

const envio2 = new Envio('urgente', 1);
console.log(`Costo de envío urgente: $${envio2.calcularCosto()}`);
