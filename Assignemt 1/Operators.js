'use strict';

//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/
1.
let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend)
2.
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend)
3.
Det trækker 1 fra variablen numOfDaysUntilWeekend

//assignemnt 2
//Addition to numbers
x = 3
x = x += 5
console.log(x)

// = 8

//assignemnt 3
//Subtraction to numbers
x = 5
x = x -= 3
console.log(x)

//2 

//assignemnt 4
//write two sentences in two variables and connect them together 

let helloWorld = 'Hello World';
let secondVariable = 'Javascript Variables';
console.log(helloWorld + ' ' + secondVariable)

//assignemnt 5
//write two variables, one number and one string. add them together

let year = 2022
let month = 'Febuary'
console.log(year + ' ' + month)

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s; //20
let u = r - s; //10
let v = t / u; //2
let x = r * v; //30
let y = s % v; //1

//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4;
if (x == 30 || y == 2) {
    console.log("yeah you got it");
}
Det kan ikke skrives da x er lig med 3

//change a number in a variable, so it print out the text
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4;
if (x == 3 || y == 2) {
    console.log("yeah you got it");
}

//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt
let enterNumber = prompt('Enter a number between 0 and anything please, then i will add 1 to it :D')
let myAddingNumber = 1
console.log(enterNumber + myAddingNumber)

//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens

0.1 + 0.2; /* 0.30000000000000004 matematik med flyende komma, 
opnår bedst nøjagtighed ved holder sig til heltal*/

0.1 + 0.2 === 0.3; // false da 0.1 + 0.2 ikke er præcis lig med 0.3 som ønsket
3 - 1 // 2 korrekt 
3 + 1 // 4 korrekt
'3' - 1 // 2 når man minuser strings vil den lave det om til tal og regne ud
'3' + 1 // 31 da + ligger til vores string og derfor ligger bagved tallet 3 
'222' - -'111' //333 Minus minus giver plus? 

// = 333

//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 

Da hvert skudår kan deles nøjagtigt med 4 == % ud over de år der er nøjagtigt deligt med
100 != , dog med den undtales at århundredet kan deles nøjagtigt med 400 == %.
Disse tre betingelser indsættes i en funktion med parameret "year", og input "0"
så hvis(if) det givende år er et skud år vil den vise teksten "er korrekt"
og hvis ikke(else) vise teksten "er desværre forkert"

function skudaar(skud) {

    if ((0 == skud % 4) && (0 != skud % 100) || (0 == skud % 400)) {
        console.log(skud + ' er korrekt');
    } else {
        console.log(skud + ' er desværre forkert');
    }
}

Samt en prompt for at vise dialog boxen som sender inputet tilbage på ok 
ellers gå den i null.

let skud = prompt('Gæt et skudår:');

skudaar(skud);

