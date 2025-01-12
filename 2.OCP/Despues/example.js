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