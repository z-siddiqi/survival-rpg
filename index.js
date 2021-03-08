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
	menuInput: while (true) {
		let input = readlineSync.question(`Menu\nChoose your option:\ne: Explore \nq: Quit Game\n`);
		switch (input) {
			case 'e':
				explore();
				break menuInput;
			case 'q':
				console.log("You have quit the game");
				break menuInput;
			default:
				console.log("Error! Invalid option!");
		}
	}
}

function playerAction() {
	actionInput: while (true) {
		let input = readlineSync.question(`Action\nChoose your action:\nm: Move \ni: Use Item\n`);
		switch (input) {
			case "m":
				playerMovement();
				break actionInput;
			case "i":
				playerItem();
				break actionInput;
			default:
				console.log("Error! Invalid action!");
		}
	}
}

function playerMovement() {
	movementInput: while (true) {
		let input = readlineSync.question(`Movement\nInput movement using 'wasd' keys.\n`);
		switch (input) {
			case "w":
				player.move(0, -1);
				break movementInput;
			case "a":
				player.move(1, -1);
				break movementInput;
			case "s":
				player.move(0, 1);
				break movementInput;
			case "d":
				player.move(1, 1);
				break movementInput;
			default:
				console.log("Error! Invalid movement!");
		}
	}
}

function playerItem() {
	console.log("Which item would you like to use?\n");
	console.log(player.checkInventory());
	let input = readlineSync.question(">\n");
	player.useItem(input, (outcome) => {
		player.addHealth(outcome["health"]);
	});
}

function explore() {
	console.log(level.getIntro());
	game: while (player.health > 0) {
		playerAction();
		level.updateStatus(player.position, player.health, (outcome) => {
			player.addHealth(outcome["health"]);
			player.takeDamage(outcome["damage"]);
			player.addToInventory(outcome["newItem"]);
		});
	}
	console.log("End of level.");
}

menu();
