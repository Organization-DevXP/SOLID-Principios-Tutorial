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
class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado); // Aquí comienza el problema
    }

    set ancho(value) {
        this._ancho = value;
        this._alto = value; // Cambiar ancho también cambia alto
    }

    set alto(value) {
        this._ancho = value; // Cambiar alto también cambia ancho
        this._alto = value;
    }

    get ancho() {
        return this._ancho;
    }

    get alto() {
        return this._alto;
    }
}

// Uso del código
const figuras = [
    new Rectangulo(4, 5), // Rectángulo
    new Cuadrado(4)       // Cuadrado
];

figuras.forEach(figura => {
    console.log(`Área: ${figura.calcularArea()}`);
});

// Problema: Cambiar ancho o alto en un cuadrado rompe la lógica de la clase base
const cuadrado = new Cuadrado(4);
cuadrado.ancho = 6;
console.log(`Área del cuadrado después de cambiar ancho: ${cuadrado.calcularArea()}`); // Resultado inesperado
