class Shape {
    public x: Number;
    public y: Number;
    public color: String;

    constructor(x: Number, y: Number, color: String) {
        this.x = x
        this.y = y
        this.color = color
    }

    clone(): Shape {
        return new Shape(
            this.x,
            this.y,
            this.color
        )
    }

    toString(): String {
        return `Shape: x[${this.x}] y[${this.y}] color[${this.color}]`
    }
}

// extending the clone
class Circle extends Shape {
    public radius: Number;
    constructor(x: Number, y: Number, color: String, radius: Number) {
        super(x, y, color)
        this.radius = radius
    }

    clone(): Circle {
        return new Circle(
            this.x,
            this.y,
            this.color,
            this.radius
        )
    }

    toString(): String {
        return `${super.toString()} radius[${this.radius}]`
    }
}

let shape = new Shape(1, 2, "blue");
let prototypeShape = shape.clone();

let circle = new Circle(4, 5, "Violet", 0.5)
let circlePrototype = circle.clone()

console.log(`Shape prototype: ${prototypeShape}`)
console.log(`Circle prototype: ${circlePrototype}`)