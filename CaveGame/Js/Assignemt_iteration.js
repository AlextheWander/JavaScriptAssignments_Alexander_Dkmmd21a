//Dan et arry med disse ord og få dem til at skrive det hemmelige ord "Hello"
"Hi"
"element"
"logo"
"loop"
"octupus"


let myWords = ["Hi", "element", "logo", "loop", "octupus"];
const result = myWords.map(([v])=> {
    return v[0];
});
console.log(result);

let myWord = result.reduce((acc, cv)) => {
    return acc + cv;
})
console.log(myWord)


