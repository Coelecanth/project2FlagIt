/* jshint esversion: 11, jquery: true */
let shuffled;
let maxQuestions = 25;
let intialCorrect = 0;
let intialWrong = 0;
let intialAsked = 0;

let flagImage = document.getElementById("targ-flag");
let flagChoices = document.querySelectorAll(".flag-choice");
let currentFlag = 1;


const totalQuestions = document.getElementById("questions-total");
const askedQuestions = document.getElementById("questions-asked");
const correctQuestions = document.getElementById("questions-correct");
const wrongQuestions = document.getElementById("questions-wrong");
const gameStart = document.getElementById("start-game");


// set max question and write to page 
totalQuestions.innerText = "/" + maxQuestions;
correctQuestions.innerText = intialCorrect
wrongQuestions.innerText = intialWrong 
askedQuestions.innerText = intialAsked

console.log("connected")

// Wait for the DOM to finish loading before running the game start
// Get the button for start game and add event listeners for click.
$(document).ready(function () {
    $(gameStart).click(initNewgame);
});

function initNewgame() {
    // Shuffle array, loads the array and shuffles it  
    shuffled = countryArray.sort(() => 0.5 - Math.random());

    getFlag();
}

function getFlag() {

    $(flagImage).attr("src", `assets/img/${shuffled[currentFlag].flagName}`);
    $(flagChoices).each(function(i, choice) {
        let buttonId = choice.id;
        let arrayIndex = buttonId.replace("answer", "");
        choice.innerText = shuffled[arrayIndex].locale;
        let randomOrder = Math.floor(Math.random() * 4) + 1;
        $(choice).css("order", randomOrder);
  
    });
};

   $('#answer1').on("click", function (){
        $('#answer1').html(`CORRECT`)
        //console.log ("type is " + typeof correctQuestions.innerText)
        correctQuestions.innerText = parseInt(correctQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        // initNewgame()
    });
    $('#answer2').on("click", function (){
        $('#answer2').html(`WRONG`)
        wrongQuestions.innerText =  parseInt(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        // initNewgame()
    });
    $('#answer3').on("click", function (){
        $('#answer3').html(`WRONG`)
        wrongQuestions.innerText =  parseint(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        // initNewgame()       
    });
    $('#answer4').on("click", function (){
        $('#answer4').html(`WRONG`)
        wrongQuestions.innerText =  parseInt(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        // initNewgame()
    });