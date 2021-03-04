import rl from "readline";
import {Player} from "./Player.js";
import {run} from "./hangman.js";

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var player = new Player();
var lobbyOptions = `\n1: Explore \n2: Inventory \n3: Player Status\n`;
var inventoryOptions = `\n1: useItem \n2: Back to menu\n`;

/* Initialise player name
readline.question(`Game Start \nEnter your name: `, (answer) => {
  player.setName(answer);
  menu();
});
*/

// offer options 1: Explore 2: Inventory 3: Player Status
function menu(){
  //console.log(`Welcome ${player.getName()}`);
  
  readline.question(`Choose your option:${lobbyOptions}`, (answer) => {
    
    switch(answer){
      case '1': 
        methodOne(); // game/explore
        break;
      case '2': 
        inventoryMenu();
        break;
      case '3': 
        methodThree();
        break;
      default: 
        console.log("You have logged an invalid value");
        menu();
    }

  });
}

function methodOne(){
  readline.close();
}

function inventoryMenu(){
  player.checkInventory();
  readline.question(`Choose your option: ${inventoryOptions}`, (answer) => {
    switch(answer){
      case '1': 
        playerUseItem(); // game/explore
        break;
      default: 
        menu();
    }
  });
  //readline.close();
}

function playerUseItem(){
  console.log("implement");
  //readline.close();
  inventoryMenu();
}

menu();

