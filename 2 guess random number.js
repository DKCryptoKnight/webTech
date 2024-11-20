const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = prompt("Guess a number between 1 and 10:");

if (parseInt(userGuess) === randomNumber) {
    console.log("Good Work");
} else {
    console.log(`Not matched. The correct number was ${randomNumber}`);
}
