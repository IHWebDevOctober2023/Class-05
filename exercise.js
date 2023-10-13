// EXERCISE 1

/*
Create a class called "Dice" with a constructor that receives a number of sides and a method called "roll" that console logs a random number between 1 and the number of sides.

*/

class Dice {
    constructor(sides) {
        this.sides = sides;
    }
    roll() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        console.log(`The result of the dice is: ${randomNumber}`);
    }
}

const newDice = new Dice(30)

newDice.roll()
