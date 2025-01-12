# Principio de Abierto/Cerrado (Open/Closed Principle - OCP)

## Definición

El **Principio de Abierto/Cerrado (OCP)** establece que las entidades de software (como clases, módulos o funciones) deben estar **abiertas para extensión**, pero **cerradas para modificación**. Esto significa que podemos añadir nuevas funcionalidades sin alterar el código existente, reduciendo el riesgo de errores.

### Ejemplo básico

Un sistema de cálculo de área para diferentes formas geométricas que permite agregar nuevas figuras sin modificar las clases existentes.

## Problema

### Código sin OCP (antes):

Consulta el archivo [`Antes/example.js`](./Antes/example.
js).

```javascript
class ShapeCalculator {
  calculateArea(shape) {
    if (shape.type === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "rectangle") {
      return shape.width * shape.height;
    }
    throw new Error("Tipo de figura no soportado.");
  }
}

const calculator = new ShapeCalculator();
console.log(calculator.calculateArea({ type: "circle", radius: 5 }));
console.log(
  calculator.calculateArea({ type: "rectangle", width: 4, height: 6 })
);
```

### Problema detectado:

1. Cada vez que añadimos una nueva figura (como un triángulo), debemos modificar la clase ShapeCalculator.
2. Esto viola el principio OCP, ya que estamos alterando código existente, lo que puede introducir errores.

## Solución

Código con OCP (después):
Consulta el archivo [`Despues/example.js`](./Despues/
example.js).

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach((shape) => {
  console.log(`Área: ${shape.getArea()}`);
});
```

### Ventajas:

1. Las nuevas formas se implementan como clases separadas sin modificar la clase ShapeCalculator.
2. El código es más flexible y fácil de mantener.
