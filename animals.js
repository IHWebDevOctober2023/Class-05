class Animal {
    constructor(name, mainColor, sound) {
        this.name = name;
        this.mainColor = mainColor;
        this.sound = sound;
        this.points = 10000;
    }
    scream(intensity) {
        console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
}

// The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
class Cat extends Animal {
    constructor(name, mainColor, sound, nbOfLegs) {
        // `super` refers to the constructor of the parent (Animal)
        // with super Cat gets all the attributes and methods of the Animal class
        super(name, mainColor, sound);
        this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
    }
}

const catOne = new Cat('Garfield', 'orange', 'Meow', 4);
const newAnimal = new Animal("Lucas", "White and brown", "Buuurh")
console.log(catOne);


class Chameleon extends Animal {
    // Override of the default constructor
    constructor(name, color) {
        super(name, color, '...');
    }
    // Add a new method 'changeColor()'
    changeColor(newColor) {
        this.mainColor = newColor;
    }
}

const chameleonOne = new Chameleon("Marcel", "red")