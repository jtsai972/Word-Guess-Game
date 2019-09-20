//setting up arrays
    let answer = [];
    //setting up basic wordbank
    let wordBank = ["github", "element", "javascript", "cascading", "stylesheet", "angular", "react", "node", "vue", "code"];

//setting basic variables
    let countWin, countLoss, countGuess, countBlank; //counters
    let correct; //boolean
    let randomWord; //word

    let regex = /[a-zA-Z]/g;

//Setting document id variables
    let winsText = document.getElementById("wins"),
        lossesText = document.getElementById("losses"),
        guessesText = document.getElementById("guesses"),
        answerText = document.getElementById("answer"),
        wrongText = document.getElementById("wrong");

//Initiate Game
    countLoss = countWin = countBlank = 0;
    countGuess = 9;

    print();
    randomGenerator();

//generate random word and blank
    function randomGenerator () {
        //generate random number between 0 to wordbank size
        let randomNum = Math.floor(Math.random() * Math.floor(wordBank.length));
        // console.log(randomNum); //checking that it works

        //set randomWord to 
        randomWord = wordBank[randomNum];
        console.log("Random Word: " + randomWord);

        //Setting up blank letters
        for (let i = 0; i < randomWord.length; i++ ){
            answer[i] = "_ ";
            countBlank++;
        }

        console.log("Counted blanks: " + countBlank);

        answerText.innerHTML = answer.join("");
        
        //return word
    }

//check for correct answer
function checking(guess) {
    correct = false;

    //checking for match in the word
    for(let i = 0; i< randomWord.length; i++) {
        if(guess === randomWord[i]) {
            correct = true;
            answer[i] = randomWord[i];
            countBlank--;
            console.log("blank " + i + ": " + countBlank);
        }
    }
    
    //if there is no matching letter
    if(correct !== true) {
        countGuess--;
        wrongText.innerHTML += guess;

        console.log(countGuess);
    }

    if (countBlank <= 0) {
        countWin++;
        newWord();
    }

    if(countGuess <= 0) {
        countLoss++;
        newWord();
    }

    print();
} 

function print() {
    winsText.innerHTML = countWin;
    lossesText.innerHTML = countLoss;
    guessesText.innerHTML = countGuess;
    //Printing the answer
    answerText.innerHTML = answer.join("");
}

function newWord() {
    countGuess = 9;
    countBlank = 0;
    wrongText.textContent = " ";
    answer = [];

    randomGenerator();
    print();
}


//When key is pressed, start game
document.onkeyup = function(event) {
    var guess = event.key;

    if((guess.match(regex))) {
        checking(guess);

        //issue with repeating letters
    }
    
    //updating
    print();
}

//if guess is a letter then add letter to answer

//else add letter to wrong
