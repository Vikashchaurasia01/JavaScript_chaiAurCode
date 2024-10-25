const coding = ['py', 'java', 'cpp', 'ruby', 'js']

coding.forEach(function (item) {
    // console.log(item)
})

coding.forEach((item) => {
    // console.log(item)
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe) // we can't pass the function like printMe(), we have to pass the reference only

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },

    {
        languageName: "Java",
        languageFileName: "Java"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})