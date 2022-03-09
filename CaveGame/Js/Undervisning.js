
// While loops (shoppinglist) samt viser det på siden HTML
// Så hver gang den køre ligger den shoppinglist til. 
// Så længe i er mindre end min shoppingliste viser den. 

let i = 0;
let shoppinglist = ["milk", "carrots", "bananas"]
let myHeading = document.getElementById("test")

while (i < shoppinglist.length){
    myHeading.innerHTML += "<br>" + shoppinglist[i];
i++;
} 

// .forEach() execute the same code for each element of the arry (minder om wild loop) men den kender længden så den går aldrig i uendelig.

let shoppingList = ["milk", "carrots", "bananas"]

shoppingList.forEach(item => {
console.log("You need to buy " + item);
});

//logger You need to buy + hver item en for en indtil der ikke er flere. 
//item, index(index number), arry, is a parameter - information that the methods needs to do what it is supposed to.

//forEach virker kun på arrys virker ikke på DOM (kan lade sig gøre men der er et twist)

let shoppingList = ["milk", "carrots", "bananas"];
let anothershoppinglist = ["cat food"]
shoppingList.forEach((item, index, array) => {      //up to three parameters in one forEach
console.log(`${item} has index number ${index} in the array containing ${array}`);
});
// Iterating through an array displaying both the current item, the index number of said item, and the whole array

//If you have diffrent shoppinglists this is faster than above. 

let shoppingList = ["milk", "carrots", "bananas"];
const logItems = item => {
console.log(`You need ${item}`);
}
shoppingList.forEach(logItems); //function call logItems 
anothershoppinglist.forEach(logItems); // næste funcion til næste liste 
//for each bliver brugt i forbindelse med vi vil vise noget på siden


// .map()

//The .map() method also takes an argument of a call function, but returns a new array. 
//vi generer en ny liste som er baseret på vores tidligere liste. 


let fahrenheit = [32, 41, 50, 59, 68]; //listen vi tager udgangspunkt i 
let celcius = fahrenheit.map(number => { //
return (number - 32) * 5/9; //retunere number -32 * 5 / 9 = 
});
console.log(celcius);

//valutaomregner osv, celcius der bliver skabt er nu en ny liste der er skabt og bruges igen. 


// .filter()  
//returns a new list like map() in boolean (true/false) the elements that starts with b 
// "startsWith" er hvad elementet starter med (andre er .endswith(), .includes())


let shoppingList = ["milk", "carrots", "bananas", "beans", "cucumber", "tomatoes"];
let startsWithB = shoppingList.filter(element => { //variable der filtere i let ovenover 
return element.startsWith("b"); //returns the elements that starts with b,
});
console.log(startsWithB); 

// .reduce 
//retunere kun en værdi ud fra den arkumulerede værdi af hvert element
// kan bruges til samlede score eks kahoot. 

let score = [1, 0, 1, 0, 0, 0, 1];
let finalScore = score.reduce((accumulator, currentValue) => { //bruger .reduce() med udgangspunktet og den værdi den er kommet til 
return accumulator + currentValue; // 1 runde accu = 0 + 1 = 1  2 runde 1+0 = 1  
});
console.log(finalScore); //printer the final score 

// .every()
// returns a false/true dependent on if all elements = to og < >
let myNumbers = [18, 22, 17, 17, 17];
const allNumbersAreAbove17 = myNumbers.every(element => element > 17);
console.log(allNumbersAreAbove17); //logs falls the 17 numbers are = to 17 and not over 

// kan bruges om man svaret rigtigt klikket på de ting de skulle (spil osv)


// .find()
// finds the first element in the arry that match the needs

let myNumbers = [18, 22, 17, 17, 17];
const firstOneAbove17 = myNumbers.find(element => element > 17); //hvis dette er 16 viser den stadig 18)
console.log(firstOneAbove17); //retunere det første tal over 17 som er 18. 

/* All of these methods will help us write cleaner and more readable code.
   If we want to have something done to all of the elements in an array, e.g.
   have them shown on the page in a specific manner, we may use the .forEach() method.
   When wanting to generate a new array that is based on the current one - e.g. 
   grapping only the first letter of each of the elements in an array to find a secret word 
   or something, we may use the .map() method. To filter the elements in our array, e.g.
   for finding all the words that starts with a specific letter, we may use the .filter() method.
   To sum up the elements in an array, reducing them to one single value, we may use the .reduce()
   method. To find the first element that matches the set criteria, we may use the .find() method. */

