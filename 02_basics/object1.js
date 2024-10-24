// Singleton object

const mySym = Symbol("key1");


const jsUser = {
    name : "Vikash",
    age : 22,
    [mySym] : "myKey1",
    location : "Haldia",
    email : "Vikashkch@google.com"
}

console.log(jsUser["name"]); // we can also write jsUser.name, as we can see that name is taken as string, 
// so it means that the variable declare as a string by default
console.log(jsUser["email"]);

jsUser.email = "Vikashkch@chatGPT.com" // we can change it
console.log(jsUser["email"]);

// we can also freeze the object, so that anyone can't change it
Object.freeze(jsUser)
jsUser.name = "Stuti"
console.log(jsUser["name"]+" : name is not changed to stuti");


jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)
}

// jsUser.greeting();
console.log(jsUser.greetingTwo());

