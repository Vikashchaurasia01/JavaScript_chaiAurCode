// object literals

const tinder_user = new Object() // singleton object
// console.log(tinder_user)

const tinderUser = {} // not a singleton object
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "example@gmail.com",
    fullName : {
        userFullName :{
            user : "example Name"
        },
        firstName : "Vikash",
        lastName : "Kumar"
    }
}

// console.log(regularUser.fullName?.firstName) // Vikash
// console.log(regularUser.fullName?.lastName) // Kumar
// console.log(regularUser.fullName?.userFullName) // { user: 'example Name' }

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign({}, obj1, obj2) // {} whether we write it or not, it doesn't show error but it's a good practice to use it
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj1, ...obj2} // by using spread operator we can copy the objects or arrays
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    courseName : "JS in hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor: instructor} = course // object destructure
console.log(instructor)

