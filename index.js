import rl from "readline";
import {Player} from "./player.js";
import {run} from "./hangman.js";


const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout,
});

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
  
  readline.question(`\nMenu\nChoose your option:${lobbyOptions}`, (answer) => {
    
    switch(answer){
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
        readline.close();
        break;
      default: 
        console.log("You have logged an invalid value");
        menu();
    }

  });
}

function explore(){
  readline.close();
}

function inventoryMenu(){
  console.log(`\nInventory`);
  player.checkInventory();
  readline.question(`Choose your option: ${inventoryOptions}`, (answer) => {
    switch(answer){
      case '1': 
        playerUseItem(); // use item
        break;
      default: 
        menu();
    }
  });
  //readline.close();
}

function printPlayerStatus(){
  console.log(``);
  player.printStatus();
  menu();
}

function playerUseItem(){
  console.log("yet to be implemented");
  //readline.close();
  inventoryMenu();
}

menu();

