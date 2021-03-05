import { Hangman } from "./hangman.js";
import { Player } from "./player.js";

export class Level {
	constructor(name, description, words) {
		this.name = name;
		this.description = description;
		this.hangman = new Hangman(words);
		this.prizes = [];
		// 0 = nothing, 1 = entry, 2 = exit, 3 = hangman
		this.map = [[0, 2, 0], [3, 0, 0], [0, 1, 0]];
	}

	// generateMap() {
	// 	this.map = [...Array(3)].map(() => Array.from({length: 3}, () => Math.floor(Math.random() * 4)));
	// }

	displayLocation(position) {
		let x = position[0];
		let y = position[1];
		let element = this.map[x][y];
		console.log(element);
	}

	getPrize() {
		let prize = this.prizes.pop();
		return prize;
	}

	displayIntro() {
		console.log(`This level is called: ${this.name}\n`);
		console.log(`${this.description}`);
	}
}

// testing
let level = new Level(
	"Level 1",
	"Easy level.",
	["words", "birds"]
);
let player = new Player();
level.displayLocation(player.position);
player.move();
console.log(player.position);

