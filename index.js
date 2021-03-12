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
	let input;
	menuInput: while (true) {
		input = readlineSync.question(`Menu\nChoose your option:\ne: Explore \nq: Quit Game\n> `);
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
	let input;
	actionInput: while (true) {
		input = readlineSync.question(`Action\nChoose your action:\nm: Move \ni: Use Item\n> `);
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
	return input;
}

function playerMovement() {
	let input;
	movementInput: while (true) {
		input = readlineSync.question(`Movement\nInput movement using 'wasd' keys.\n> `);
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
	let input;
	let inventory = player.inventory.getInventoryString();
	if (inventory === "") {
		console.log("Your inventory is empty");
		return;
	}
	input = readlineSync.question(`Which item would you like to use?\n${inventory}\n> `);
	player.useItem(input, (outcome) => {
		player.addHealth(outcome["health"]);
	});
}

function explore() {
	console.log(level.getIntro());
	game: while (player.health > 0) {
		if (playerAction() === "m") {
			level.updateStatus(player.position, player.health, (outcome) => {
				player.addHealth(outcome["health"]);
				player.takeDamage(outcome["damage"]);
				player.inventory.addToBag(outcome["newItem"]);
			});
		} else {
			continue game;
		}
	}
	console.log("End of level.");
}

menu();
