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

// Uso
const calculator = new ShapeCalculator();

console.log(calculator.calculateArea({ type: "circle", radius: 5 }));
console.log(calculator.calculateArea({ type: "rectangle", width: 4, height: 6 }));
