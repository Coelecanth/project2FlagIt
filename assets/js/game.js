/* jshint esversion: 11, jquery: true */
let shuffled;
let sumQuestions;
let maxQuestions = 4;
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
totalQuestions.innerText =  maxQuestions;
correctQuestions.innerText = intialCorrect
wrongQuestions.innerText = intialWrong 
askedQuestions.innerText = intialAsked

console.log("connected")

// Wait for the DOM to finish loading before running the game start
// Get the button for start game and add event listeners for click.
$(document).ready(function () {
    $("#start-game").click(initNewgame);
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

   $('#answer1').on("click", function () {
        $('#answer1').html(`<h3>CORRECT</h3>`);
        $('#answer2').prop('disabled', true);
        $('#answer3').prop('disabled', true);
        $('#answer4').prop('disabled', true);
        correctQuestions.innerText = parseInt(correctQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        callNxtbutton()
    });
    $('#answer2').on("click", function () {
        $('#answer2').html(`<h3>WRONG</h3>`);
        $('#answer1').prop('disabled', true);
        $('#answer3').prop('disabled', true);
        $('#answer4').prop('disabled', true);
        wrongQuestions.innerText =  parseInt(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        callNxtbutton()
    });
    $('#answer3').on("click", function () {
        $('#answer3').html(`<h3>WRONG</h3>`);
        $('#answer2').prop('disabled', true);
        $('#answer1').prop('disabled', true);
        $('#answer4').prop('disabled', true);
        wrongQuestions.innerText =  parseInt(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        callNxtbutton()      
    });
    $('#answer4').on("click", function () {
        $('#answer4').html(`<h3>WRONG</h3>`);
        $('#answer1').prop('disabled', true);
        $('#answer3').prop('disabled', true);
        $('#answer4').prop('disabled', true);
        wrongQuestions.innerText = parseInt(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
        callNxtbutton()
    });

    function resetState() {
        // reset button states and calculate  
        $('#next-button').prop('disabled', false);
        
        initNewgame()
    }

    function callNxtbutton() {
    // call listener for Next Buttton   
        $('#next-button').on("click", function () {
            $('#answer1').prop('disabled', false);
            $('#answer2').prop('disabled', false);
            $('#answer3').prop('disabled', false);
            $('#answer4').prop('disabled', false);
            $('#next-button').prop('disabled', true);
        });
            sumQuestions = parseInt(correctQuestions.innerText,10) + parseInt(wrongQuestions.innerText,10);
            // console.log("Max Q " + maxQuestions);
            // console.log("Corr Q " + correctQuestions.innerText);
            // console.log("Wrong Q " + wrongQuestions.innerText);
            // console.log(sumQuestions);
             
            if (maxQuestions == sumQuestions) {
               console.log("exit = true") 
               return 
              }
            
            resetState()
            
    };