//setting up basic wordbank
let wordBank = ["test", "exam", "javascript", "cascading", "stylesheet", "angular", "react", "node", "code"];

//setting basic variables
let countWin, countLoss, countGuess;

//generate random word
function random () {
    //generate random number between 0 to wordbank size
    let randomNum = Math.floor(Math.random() * Math.floor(wordBank.length));

    console.log(randomNum);

    //make it into a random word
    let randomWord = wordBank[randomNum]; 

    //return word
    return randomWord;
}
console.log(random()); //checking



//When key is pressed, start game

//if guess is a letter then add letter to answer

//else add letter to wrong