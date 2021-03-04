import { Hangman } from "./hangman.js";

export class Level {
	constructor(name, description, words) {
		this.name = name;
		this.description = description;
		this.hangman = new Hangman(words);
		this.prizes = [];
	}

	getPrize() {
		prize = this.prizes.pop();
		return prize;
	}

	displayIntro() {
		console.log(`This level is called: ${this.name}\n`);
		console.log(`${this.description}`);
	}

	runHangmanGame() {
		this.hangman.main().then(result => {
			console.log(result);
		}).catch(e => {
			console.log('Failed:', e);
		})
	}

	run() {
		this.displayIntro();
		this.runHangmanGame();
	}
}

// testing
let firstLevel = new Level(
	"Level 1",
	"You have encountered an object.\nGuess the name of the object correctly to add it to your inventory.",
	["words", "birds"]
)
firstLevel.run();