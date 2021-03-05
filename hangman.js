import readline from "readline";

export class Hangman {
    constructor(words){
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
}

export async function run() {
    try {
        let hangmanResult = await hangman()
        console.log(hangmanResult);
    } catch (e) {
        console.log("Failed:", e);
    }
}

//run();
export function main() {
        let randomWord = this.getRandomWord();
        let playerGuesses = [];
        return new Promise((resolve, reject) => {
            let rl = readline.createInterface(process.stdin, process.stdout);
            console.log(this.getOutput(randomWord, playerGuesses));
            rl.setPrompt(">");
            rl.prompt();
            rl.on('line', (playerGuess) => {
                if (playerGuess.length != 1) {
                    console.log("Error! Can only guess one letter at a time!")
                } else {
                    console.log(this.processGuess(randomWord, playerGuess, playerGuesses));
                    if (this.isRoundWon(randomWord, playerGuesses)) {
                        console.log("You Won!")
                        rl.close();
                    } else if (this.isRoundLost(randomWord, playerGuesses)) {
                        console.log("You Lost!")
                        rl.close();
                    }
                }
                rl.prompt()
            }).on('close', function () {
                resolve("Round Over!");
            });
        })
    }