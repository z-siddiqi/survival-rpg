import readlineSync from "readline-sync";

export class Hangman {
    constructor(words) {
        this.words = words;
    }

    getRandomWord() {
        const randomWord = this.words[Math.floor(Math.random() * this.words.length)]
        return randomWord.toLowerCase();
    }

    getOutput(word, guesses) {
        let formattedWord = "";
        for (let letter of word) {
            if (guesses.includes(letter)) {
                formattedWord += letter + " ";
            } else {
                formattedWord += "_ ";
            }
        }
        return `Guess the word: ${formattedWord}\n`;
    }

    processGuess(word, guess, guesses) {
        if (!guesses.includes(guess)) {
            guesses.push(guess);
            return this.getOutput(word, guesses);
        }
        return "You have already guessed that letter! Try again."
    }

    isRoundWon(word, guesses) {
        return !word.split('').find(letter => !guesses.includes(letter));
    }

    isRoundLost(word, guesses) {
        let incorrectGuesses = guesses.filter(letter => !word.includes(letter))
        return !(5 - incorrectGuesses.length);
    }

    main() {
        // maybe pass in an item to win from level items?
        let randomWord = this.getRandomWord();
        let playerGuesses = [];
        let outcome;
        console.log(`You have encountered an object. Guess the ${randomWord.length} letter word to add it to your inventory.`);
        console.log(this.getOutput(randomWord, playerGuesses));
        while (true) {
            var playerGuess = readlineSync.question(">");
            if (playerGuess.length != 1) {
                console.log("Error! Can only guess one letter at a time!")
            } else {
                console.log(this.processGuess(randomWord, playerGuess, playerGuesses));
                if (this.isRoundWon(randomWord, playerGuesses)) {
                    outcome = 1;
                    console.log(`You won, ${randomWord} added to inventory!`);
                    break;
                } else if (this.isRoundLost(randomWord, playerGuesses)) {
                    outcome = 0;
                    console.log("You lost!");
                    // reduce health here
                    break;
                }
            }
        }
        return outcome;
    }
}
