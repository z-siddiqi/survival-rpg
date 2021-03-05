import readlineSync from "readline-sync";
import {Player} from "./player.js";
//import {run} from "./hangman.js";
import {Level} from "./level.js";

/*
const readline = readlineSync.createInterface({
	input: process.stdin,
	output: process.stdout,
});
*/

var player = new Player();
var lobbyOptions = `\n1: Explore \n2: Inventory \n3: Player Status\nQ: Quit Game\n`;
var inventoryOptions = `\n1: Use item \n2: Back to menu\n`;

/* Initialise player name
readline.question(`Game Start \nEnter your name: `, (answer) => {
  player.setName(answer);
  menu();
});
*/

// offer options 1: Explore 2: Inventory 3: Player Status
function menu(){
  //console.log(`Welcome ${player.getName()}`);

    let menuOption = readlineSync.question(`\nMenu\nChoose your option:${lobbyOptions}`);

    switch(menuOption){
      case '1': 
        explore(); // game/explore
        break;
      case '2': 
        inventoryMenu();
        break;
      case '3': 
        printPlayerStatus();
        break;
      case 'Q':
      case 'q':
        console.log("You have quit the game");
        break;
      default: 
        console.log("You have logged an invalid value");
        menu();
    }
}

function explore(){
  let firstLevel = new Level(
    "Level 1",
    "You have encountered an object.\nGuess the name of the object correctly to add it to your inventory.",
    ["words", "birds"]
  )
  firstLevel.run();
  console.log("end of lvl, returned to game");
  menu();
}

function inventoryMenu(){
  console.log(`\nInventory`);
  player.checkInventory();

  let inventoryOption = readlineSync.question(`Choose your option: ${inventoryOptions}`);
  switch(inventoryOption){
    case '1': 
      playerUseItem(); // use item
      break;
    default: 
      menu();
  }
}

function printPlayerStatus(){
  console.log(``);
  player.printStatus();
  menu();
}

function playerUseItem(){
  console.log("yet to be implemented");
  inventoryMenu();
}

menu();

