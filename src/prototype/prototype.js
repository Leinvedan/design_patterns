class Shape {

    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }

    clone() {
        return new Shape(
            this.x,
            this.y,
            this.color
        )
    }

    toString() {
        return `Shape: x[${this.x}] y[${this.y}] color[${this.color}]`
    }
}

// extending the clone
class Circle extends Shape {
    constructor(x, y, color, radius) {
        super(x, y, color)
        this.radius = radius
    }

    clone() {
        return new Circle(
            this.x,
            this.y,
            this.color,
            this.radius
        )
    }

    toString() {
        return `${super.toString()} radius[${this.radius}]`
    }
}

let shape = new Shape(1, 2, "blue");
let prototypeShape = shape.clone();

let circle = new Circle(4, 5, "Violet", 0.5)
let circlePrototype = circle.clone()

console.log(`Shape prototype: ${prototypeShape}`)
console.log(`Circle prototype: ${circlePrototype}`)