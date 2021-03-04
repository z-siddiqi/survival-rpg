import readline from "readline";

const words = ["tree", "knife", "automobile"];

function getRandomWord(words) {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    return randomWord.toLowerCase();
}

function formatWord(word, guesses) {
    let output = "";
    for (let letter of word) {
        if (guesses.includes(letter)) {
            output += letter + " ";
        } else {
            output += "_ ";
        }
    }
    return output;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomWord = getRandomWord(words);
let playerGuesses = [];
let formattedWord = formatWord(randomWord, playerGuesses);

rl.question(`Guess the word: ${formattedWord}\n`, function(userAnswer) {
    console.log(userAnswer);
    rl.close();
});
