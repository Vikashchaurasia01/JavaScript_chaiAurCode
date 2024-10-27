/* 1.
const coding = ['py', 'java', 'cpp', 'ruby', 'js']

const values = coding.forEach( (items) => {
    console.log(items); // here the items will be printed
    return items; // foreach loop doesn't return any values wheteher we want or not
})

console.log(values) // undefined
*/


// 2.
const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter function takes a callback function to return the Value, It is used to remove disadvantage of foreach
// for each doesn't retuen the value but filter function return the values

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// });
// console.log(newNums);

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4)
//         newNums.push(num)    
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => {
    return bk.genre === 'History';
})

userBooks = books.filter((bk) => {
    return bk.edition >= 2000 && bk.genre === 'History';
})

// console.log(userBooks);


// Map() function, it is also a callback function and it is slightly better tha foreach

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNumbers.map( (num) => num + 5)

newNums = myNumbers // Chaining of functions
            .map( (num) => (num * 10))
            .map( (num) => num + 1)
            .filter( (num) => num > 40); // filter is generally used for true or false

// console.log(newNums);

const myNum = [1,2,3];

// const myTotal = myNum.reduce( function (acc, currVal) {
//     console.log(`current value : ${currVal} and accumulator : ${acc}`)
//     return acc + currVal; // return (acc + currVal, initial value) if we don't declare initial value at the end

// }, 0 /* here 0 is accumulator means intial value */)

const myTotal = myNum.reduce( (acc, currVal) => acc + currVal, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(priceToPay);