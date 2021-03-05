import { Hangman } from "./hangman.js";

export class Level {
	constructor(name, description,) {
		this.name = name;
		this.description = description;
		this.items = ["syringe", "plaster", "first-aid kit"];  // these should be changed to instances of the item class
		// 0 = nothing, 1 = item, 2 = hangman
		this.map = Level.generateMap();
	}

	static generateMap() {
		return [...Array(4)].map(() => Array.from({length: 4}, () => Math.floor(Math.random() * 3)));
	}

	getOutcome(position) {
		let x = position[0];
		let y = position[1];
		let element = this.map[x][y];
		if (element === 1) {
			let item = this.getItem();
			if (typeof item !=='undefined'){
				console.log(`You have found a ${item}.`)
				return item;
			}
		} else if (element === 2) {
			let hangman = new Hangman(["fish", "chips"]);

			let games = hangman.main();

			return games;
		}

		console.log("Nothing here. Keep looking!")
		return " ";
	}

	getItem() {
		if(this.items.length==0){
			return;
		}
		let item = this.items.pop();
		return item;
	}

	getIntro() {
		return `This level is called: ${this.name}\n${this.description}`;
	}
}

// testing
/*
let level = new Level("Level 1", "Easy level.");
let player = new Player();


// main loop
console.log(level.getIntro());

game: while (true) {
	console.log("Move using 'WASD' keys.\n");
	player.inputMovevement();
	console.log(level.getOutcome(player.position));
}
*/
