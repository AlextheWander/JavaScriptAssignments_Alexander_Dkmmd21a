/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a 
HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour > 8 && hour < 11) {
    textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13) {
    textHolder.innerHTML = "It is lunch time";
} else if (hour > 14 && hour < 17) {
    textHolder.innerHTML = "It is afternoon"; //tjekker det virker
} else if (hour == 17) {
    textHolder.innerHTML = "Good afternoon";
} else if (hour > 18 && hour < 19) {
    textHolder.innerHTML = "It is dinner time";
} else if (hour > 20 && hour < 22) {
    textHolder.innerHTML = "It is snack time"; //sætter snack time else if hvis tiden er større end 20 og mindre end 22
} else {
    textHolder.innerHTML = "Goodnight";
}



/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a 
HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/
let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour > 6 && hour < 7) {
    textHolder.innerHTML = "Good morning! wakey wakey";
} else if (hour > 8 && hour < 14) {
    textHolder.innerHTML = "It is school time! Get coding";
} else if (hour > 14 && hour < 17) {
    textHolder.innerHTML = "It is afternoon chill, traning, homework time!";
} else if (hour == 17) {
    textHolder.innerHTML = "Good evening!";
} else if (hour > 18 && hour < 19) {
    textHolder.innerHTML = "It is dinner time! Get some food!";
} else if (hour > 20 && hour < 22) {
    textHolder.innerHTML = "Watch a series or read a book!";
} else {
    textHolder.innerHTML = "Goodnight! Sleep tight!";
}


/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/

const nummer1 = (window.prompt("Indtast dit første nummer for at se hvilket af to der er højest: "));
const nummer2 = (window.prompt("Indtast dit andet nummer: ")); //prompts viser diolog boks med skriften 
let størstenum; // for at definere vores varibel på det største nummer 

if (nummer1 >= nummer2) { //hvis nummer1 er større eller lig med nummer2
    størstenum = nummer1; // skriver den nummer1
}
else if (nummer2 >= nummer1) { //hvis nummer2 er større eller lig med nummer1
    størstenum = nummer2; //skriver den nummer 2
}

console.log("Dit største indtastede nummer er " + størstenum);

/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/
var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    }
    else {
        console.log(x + ", " + z + ", " + y);
    }
}
else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    }
    else {
        console.log(y + ", " + z + ", " + x);
    }
}
else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    }
    else {
        console.log(z + ", " + y + ", " + x);
    }
}        