// Variabler 
let blinker; // element på siden så endnu ikke tildelt (blinkende firkant)
const inputField; //input feltet hvor burgeren kan skrive noget 
let userInput; // brugerens input 
let option = 0; //placering på kortet
let route = [] // brugers vej igennem spillet

// Functions 

//rammer for funktion og opsætning
const whatToDo = (userInput) => {  //husk variablen in mellem ()
    userInput = userInput.toLowerCase(); //sørger for den tager højde for store og små bogstaver
    switch(userInput){
        case "no": // hver case føre til en fuction og er navigationen i spillet!
            console.log("You typed in no");
            break;
        case "yes":
            console.log("You typed in yes");
            break;
        case "help":
            console.log("You are in need of help");
            break;
        case "storage":
        case "see storage": //tilføjer så hvis du skriver en af delene føre den dig dertil
            console.log("You are now looking in the storage");
            break;
        case "forward":
            console.log("You are now moving forward");
            break;
        case "left":
            console.log("You are now moving left");
            break;
        case "right":
            console.log("You are now moving right");
            break;
        case "back":
            console.log("You are now moving back");
            break;
        case "enter":
            console.log("You are now entering the next step");
            break;
        default:
            console.log("Sorry, I dont understand!"); 

    }

}

//Event listeners

