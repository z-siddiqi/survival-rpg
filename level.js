import { Hangman } from "./hangman.js";
import { Item } from "./item.js";

export class Level {
	constructor(name, description, items) {
		this.name = name;
		this.description = description;
		this.items = items;
		// 0 = nothing, 1 = item, 2 = monster (hangman)
		this.map = Level.generateMap();
	}

	static generateMap() {
		return [...Array(4)].map(() => Array.from({length: 4}, () => Math.floor(Math.random() * 3)));
	}

	updateStatus(position, health, callback) {
		let x = position[0];
		let y = position[1];
		let element = this.map[x][y];
		let outcome = {};
		if (element === 1) {
			console.log("You have found an item.");
			let item = this.getItem();
			outcome["newItem"] = item;
		} else if (element === 2) {
			console.log("You have encountered a monster.");
			let hangman = new Hangman("monster", health);  // need to change hardcoded word
			let hangmanDamage = hangman.main();
			outcome["damage"] = hangmanDamage;
		} else {
			console.log("Nothing here. Keep looking!");
		}
		callback(outcome);
	}

	getItem() {
        let randomItem = this.items[Math.floor(Math.random() * this.items.length)]
        return randomItem;
    }

	getIntro() {
		return `This level is called: ${this.name}\n${this.description}`;
	}
}
