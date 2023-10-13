const player1 = {
    name: "Martin",
    friends: [
        {
            name: "Rafa",
            sayHi(){
                console.log(`Hi ${this.name}, You are friends with  ${player1.name} right?`);
            }
        },
        {
            name: "Simone",
            sayHi(){
                console.log(`Hi ${this.name}! How are you!`);
            }
        },
        {
            name: "Alba",
            sayHi(){
                console.log(`Hi ${this.name}! How are you!`);
            }
        }
        ]
    
}
// console.log(player1.friends[2].name);
// player1.friends[0].sayHi()