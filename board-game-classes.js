// Creation of the class
class Player {
    // The constructor is the method triggered with the `new` keyword
    constructor(name, color, position) {
        this.name = name;
        this.color = color;
        this.position = position || 0;
        this.cash = 1000;
    }

    // Method move
    move() {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    }

    // Method displayInfo
    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }
}

let player1 = new Player("Martins", "Red", "Barcelona")

console.log(player1);