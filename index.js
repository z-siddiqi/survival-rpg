import readlineSync from "readline-sync";
import { Player } from "./player.js";
import { Level } from "./level.js";
import { Item } from "./item.js";


let fish = new Item("Fish", 5);
let chips = new Item("Chips", 2);
let level = new Level("Level 1", "Easy level.", [fish, chips]);
let player = new Player();

// offer options e: Explore q: Quit Game
function menu() {
	let menuOption = readlineSync.question(`Menu\nChoose your option:\ne: Explore \nq: Quit Game\n`);
	switch (menuOption) {
		case 'e':
			explore();
			break;
		case 'q':
			console.log("You have quit the game");
			break;
		default:
			console.log("You have logged an invalid value");
			menu();
	}
}

function explore() {
	console.log(level.getIntro());
	game: while (player.health > 0) {
		console.log("Possible actions: move, use item");
		player.inputAction();
		level.updateStatus(player.position, player.health, (outcome) => {
			player.addHealth(outcome["health"]);
			player.takeDamage(outcome["damage"]);
			player.addToInventory(outcome["newItem"]);
		});
	}
	console.log("End of level.");
}

menu();
