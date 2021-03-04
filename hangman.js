import readline from "readline";

const words = ["tree", "knife", "automobile"];

function getRandomWord(words) {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    return randomWord.toLowerCase();
}

function getOutput(word, guesses) {
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

function processGuess(word, guess, guesses) {
    if (!guesses.includes(guess)) {
        guesses.push(guess);
        return getOutput(word, guesses);
    }
    return "You have already guessed that letter! Try again."
}

function isRoundWon(word, guesses) {
    return !word.split('').find(letter => !guesses.includes(letter));
}

function isRoundLost(word, guesses) {
    let incorrectGuesses = guesses.filter(letter => !word.includes(letter))
    return !(HEALTH - incorrectGuesses.length);
}

const HEALTH = 5;
let randomWord = getRandomWord(words);
let playerGuesses = [];

function hangman() {
    return new Promise(function (resolve, reject) {
        let rl = readline.createInterface(process.stdin, process.stdout);
        console.log(getOutput(randomWord, playerGuesses));
        rl.setPrompt(">");
        rl.prompt();
        rl.on('line', function (playerGuess) {
            if (playerGuess.length != 1) {
                console.log("Error! Can only guess one letter at a time!")
            } else {
                console.log(processGuess(randomWord, playerGuess, playerGuesses));
                if (isRoundWon(randomWord, playerGuesses)) {
                    console.log("You Won!")
                    rl.close();
                } else if (isRoundLost(randomWord, playerGuesses)) {
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

async function run() {
    try {
        let hangmanResult = await hangman()
        console.log(hangmanResult);
    } catch (e) {
        console.log("Failed:", e);
    }
}
