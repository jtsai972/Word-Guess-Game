//setting up basic wordbank
let wordBank = ["github", "element", "javascript", "cascading", "stylesheet", "angular", "react", "node", "vue", "code"];
let answer = [];

//setting basic variables
let countWin, countLoss, countGuess;

//generate random word
function random () {
    //generate random number between 0 to wordbank size
    let randomNum = Math.floor(Math.random() * Math.floor(wordBank.length));
    // console.log(randomNum); //checking that it works

    //return word
    return wordBank[randomNum];
}
// console.log(random()); //

//check for correct answer
function checking(guess) {
for(let i = 0; i< countLet; i++) {
    if(guess === answer[i].l) {
        document.getElementById("answer").innerHTML.replace();
    }
}
}

function print() {
for(let i = 0; i< countLet; i++) {
    document.getElementById("answer").innerHTML += answer[i];
}
}

let selWord = random();
let countLet = selWord.length;
console.log(selWord);

//Setting up blank letters
for (let i = 0; i < countLet; i++ ){
answer[i] = {l: selWord[i],b: "_ "};
}



//When key is pressed, start game

//if guess is a letter then add letter to answer

//else add letter to wrong



//var questions = [{q: "question", a: "answer"}, {q: "question", a: "answer"}, {q: "question", a: "answer"} ];

/*
//setting up arrays
    let answer = [];
    //setting up basic wordbank
    let wordBank = ["github", "element", "javascript", "cascading", "stylesheet", "angular", "react", "node", "vue", "code"];

//setting basic variables
    let countWin, countLoss, countGuess; //counters
    let correct; //boolean

//generate random word
    function random () {
        //generate random number between 0 to wordbank size
        let randomNum = Math.floor(Math.random() * Math.floor(wordBank.length));
        // console.log(randomNum); //checking that it works

        //return word
        return wordBank[randomNum];
    }
// console.log(random()); //

//check for correct answer
function checking(guess) {
    correct = false;

    //checking for match in the word
    for(let i = 0; i< countLet; i++) {
        if(guess === selWord[i]) {
            correct = true;
            answer[i] = selWord[i];
            document.getElementById("answer").innerHTML += answer[i];
            blanks--;
            console.log("blank " + i + ": " + blanks);
        }
        //need another for loop to check match on a l
    }
    
    //if there is no matching letter
    if(correct !== true) {
        countGuess--;
        document.getElementById("wrong").innerHTML += guess;

        console.log(countGuess);
    }

    if (blanks <= 0) {
        answer = random();
        console.log(answer);

        reset();
    }

    print();
}

function printScore() {
    document.getElementById("wins").innerHTML = countWin;
    document.getElementById("losses").innerHTML = countLoss;
    document.getElementById("guesses").innerHTML = countGuess;
}

function print() {
    document.getElementById("answer").innerHTML = answer;
}

function reset() {
    countGuess = 9;
    selWord = random();
    countLet = selWord.length;
    blanks = countLet;

    //Setting up blank letters
    for (let i = 0; i < countLet; i++ ){
        answer[i] = "_ ";
    }

    printScore();
    print();
}

    //Initiate Game
    countLoss = countWin = 0;
    countGuess = 9;

    var selWord = random();
    var countLet = selWord.length;
    var blanks = countLet;
    console.log(selWord);

    //Setting up blank letters
    for (let i = 0; i < countLet; i++ ){
        answer[i] = "_ ";
    }

    printScore();
    print();


//When key is pressed, start game
document.onkeyup = function(event) {
    var guess = event.key;

    checking(guess);
    
    //updating
    printScore();
    print();
}

//if guess is a letter then add letter to answer

//else add letter to wrong

*/