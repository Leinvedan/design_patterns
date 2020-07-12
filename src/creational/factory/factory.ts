abstract class Animal {
    public name: String
    constructor(name: String) {
        this.name = name
    }
}

class Cat extends Animal {
    constructor(name: String) {
        super(name)
    }

    toString(): String {
        return `Kitty ${this.name}`
    }
}

class Dog extends Animal {
    constructor(name: String) {
        super(name)
    }

    toString(): String {
        return `Doggo ${this.name}`
    }
}

class AnimalFactory {
    // Single class factory
    static createDog(name: String): Dog {
        return new Dog(name)
    }

    // multiple subclasses factory
    static createAnimal(name: String, type: String): Animal | null {
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
