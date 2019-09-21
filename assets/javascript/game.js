//setting up arrays
    let arrayAnswer = [],
        arrayGuessed = [];
    //setting up basic wordbank
    let wordBank = ["github", "element", "javascript", "cascading", "stylesheet", "angular", "react", "node", "vue", "code"];

//setting basic variables
    let countWin, countLoss, countGuess, countBlank; //counters
    let boolCorrect, boolGuessed; //boolean
    let randomWord; //word

//Setting document id variables
    let winsText = document.getElementById("wins"),
        lossesText = document.getElementById("losses"),
        guessesText = document.getElementById("guesses"),
        answerText = document.getElementById("answer"),
        wrongText = document.getElementById("wrong"),
        directionsText = document.getElementById("directions");

//Initiate Game
    countLoss = countWin = countBlank = 0;
    countGuess = 9;
    boolCorrect = boolGuessed = false;

    wrongText.textContent = " ";

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
            arrayAnswer[i] = "_";
            countBlank++;
        }

        console.log("Counted blanks: " + countBlank);

        answerText.innerHTML = arrayAnswer.join("");
        
        //return word
    }

//check for correct answer
function checking(guess) {
    boolCorrect = false;

    //checking for match in the word
    for(let i = 0; i< randomWord.length; i++) {
        if(guess === randomWord[i]) {
            boolCorrect = true;
            arrayAnswer[i] = randomWord[i];
            countBlank--;
            console.log("blank " + i + ": " + countBlank);
        }
    }
    
    //if there is no matching letter
    if(boolCorrect !== true) {
        countGuess--;
        wrongText.innerHTML += guess;

        console.log(countGuess);
    }

    //if available  blanks reach 0
    if (countBlank <= 0) {
        countWin++;

        answerText.style.opacity="0";
        setTimeout(function() {
            //your code to be executed after 1 second
            newWord();
            answerText.style.opacity="1";
          }, 1000);
        
          console.log("You win!");
    }

    //if guesses reach 0
    if(countGuess <= 0) {
        countLoss++;
        newWord();
        console.log("You lose!");
    }

    //print result
    print();
} 

function print() {
    winsText.innerHTML = countWin;
    lossesText.innerHTML = countLoss;
    guessesText.innerHTML = countGuess;
    //Printing the answer
    answerText.innerHTML = arrayAnswer.join("");
}

function newWord() {
    //resetting variables
    countGuess = 9;
    countBlank = 0;
    wrongText.textContent = "";
    arrayAnswer = [];
    arrayGuessed = [];
    boolGuessed = false;

    randomGenerator();
    print();
}


//When key is pressed, start game
document.onkeyup = function(event) {

    directionsText.style.opacity = "0";

    //check if it's a valid letter
    if((event.keyCode >=65) && (event.keyCode <= 90)) {

        var guess = event.key;
        boolGuessed = false;
        
        //see if this has been entered before
        for(let i = 0; i < arrayGuessed.length; i++) {
            if(guess === arrayGuessed[i]) {
                boolGuessed = true;
            }
        }

        //if it's new, add it to array and then check if wrong or right
        if(boolGuessed === false) {
            //add item to array
            arrayGuessed.push(guess);
    
            //check 
            checking(guess);
        }
            
    }
    
    //updating
    print();
}

//if guess is a letter then add letter to answer

//else add letter to wrong
