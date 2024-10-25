/* 
    For of loop: it is used for array
    For in loop: It is used for object
*/

let arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(`Number is ${num}`)
}

const str = "Hello world!"
for (const ch of str) {
    if(ch == ' ' || ch == '!')
        continue;
    // console.log(`char is ${ch}`)
}

// Map
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // doesn't allow duplicates value

// console.log(map)

for (const [key, value] of map) {
    // console.log(`${key} -: ${value}`)
}

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(`${key} -: ${value}`) // Error bcz object is not iterable here
// }

const myObject = {
    cpp : "C++",
    java : "Java",
    js : "JavaScript",
    py : "Python",
    swift : "Swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut of ${myObject[key]}`)
}

arr = ['py', 'java', 'cpp', 'rb', 'js']
for (const key in arr) {
    console.log(`key is ${key} and value is ${arr[key]}`)
}