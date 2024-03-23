
console.log ("connected")

    // comment - load flag index 

    // call random to get random index flag 
    // 
    //display flag -eg use index to reference img asset

    //user now selcts radio button 

    //listen for submit

    
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }


/** Block comment  
* randon Number function 
*/
function randomNoMult () {
var arr = [];
while(arr.length < 4){
    var r = Math.floor(Math.random() * 237) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
    }
console.log(arr);
}

function RandomNo2 () {
    let num1 = Math.floor(Math.random() * 125) + 1;
    console.log (num1)
}

/**
 * comparison for Index returned 
 */
// function compareInd  () {
//     let IsCorrect = ReturnedIndx === ActualIndx
// }

/**
 * example function for checking answer 
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementIncorrectScore();
    }

    /**
     * function to increment the correct answer score  
     */
    incrementScore () { 
        let oldScore = parseInt (document.getElementById("correct").innerHTML);
        document.getElementById("correct").innerText = ++oldScore; 
    }

     /**
     * function to increment the corect answer score  
     */
    incrementIncorrectScore () { 
        let oldScore = parseInt (document.getElementById("incorrect").innerHTML);
        document.getElementById("incorrect").innerText = ++oldScore; 
    }