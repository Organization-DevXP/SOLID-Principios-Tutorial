// Código inicial (antes de aplicar LSP)

// Clase base Figura
class Figura {
    calcularArea() {
        throw new Error('Este método debe ser implementado por las subclases');
    }
}

// Subclase Rectangulo
class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

// Subclase Cuadrado
class Cuadrado extends Figura {
    constructor(ancho) {
        super();
        this.ancho = ancho;
    }

    calcularArea() {
        return this.ancho * this.ancho;
    }
}

// Uso del código
const figuras = [
    new Rectangulo(4, 5),
    new Cuadrado(4)
];

figuras.forEach(figura => {
    console.log(`Área: ${figura.calcularArea()}`);
});

const cuadrado = new Cuadrado(4);
cuadrado.ancho = 6;
console.log(`Área del cuadrado después de cambiar ancho: ${cuadrado.calcularArea()}`);