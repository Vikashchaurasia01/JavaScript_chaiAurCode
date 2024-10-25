/* Falsy values :
    false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/* Truthy value :
    "0", 'false', " ", [], {}, function(){}, true, 
*/

const emptyObject = {}

if(Object.keys(emptyObject) == 0){
    console.log("Object is empty")
}

// Nullsih Coalescing operator (??) : used for null and undefined
let val1;
val1 = 5 ?? 10
console.log(val1) // 5

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 10
console.log(val1) // 10


// Ternary Operator
// condition ? true : false

const price = 100;
price >= 80 ? console.log("Price greater than 80"):console.log("Price less than 80")