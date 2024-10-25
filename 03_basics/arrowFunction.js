const user = {
    username : "Vikash",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to user website`)
        console.log(this)
    }
}
// user.welcomeMessage();
// user.username = "Hitesh"
// user.welcomeMessage()



/* Arrow Function */

const chai = () => {
    let userName = "Vikash"
    // console.log(this.userName) // undefined
    // console.log(this) // {}
}
chai()


// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

const addTwo = (num1, num2) => num1+num2; // Implicit run, If code is of one line
// console.log(addTwo(3, 6))

const returnObject = () => ({username: "Vikash"})
// console.log(returnObject())


/* Immedietly Invoked Function */

(function chai(){
    // named IIFE
    console.log(`Chai pee lo`);
})(); // It is used to reduce the pollution of global scope

( (name) => {
    console.log(`Connected db , ${name}`);
})("Vikash");