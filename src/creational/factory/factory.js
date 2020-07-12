 class Animal {
    constructor(name) {
        this.name = name
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    toString() {
        return `Kitty ${this.name}`
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    toString() {
        return `Doggo ${this.name}`
    }
}

class AnimalFactory {
    // Single class factory
    static createDog(name) {
        return new Dog(name)
    }

    // multiple subclasses factory
    static createAnimal(name, type) {
        switch (type.toLowerCase()) {
            case "cat":
                return new Cat(name)
            case "dog":
                return new Dog(name)
            default:
                return null
        }
    }
}


let doggo = AnimalFactory.createDog("Charles")
let kitty = AnimalFactory.createAnimal("Lysa", "cat")

console.log(`[DOG] ${doggo}`)
console.log(`[CAT] ${kitty}`)