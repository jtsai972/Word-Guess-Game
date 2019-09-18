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