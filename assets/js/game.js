/* jshint esversion: 11, jquery: true */
let shuffled;
let sumQuestions;
var idButton;
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


resetScore()
// set max question and zero values and write to page 
function resetScore () {
totalQuestions.innerText = maxQuestions;
correctQuestions.innerText = intialCorrect
wrongQuestions.innerText = intialWrong
askedQuestions.innerText = intialAsked
}

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
    $(flagChoices).each(function (i, choice) {
        let buttonId = choice.id;
        let arrayIndex = buttonId.replace("answer", "");
        choice.innerText = shuffled[arrayIndex].locale;
        let randomOrder = Math.floor(Math.random() * 4) + 1;
        $(choice).css("order", randomOrder);
    });
};

// listen for reset game click of 
$("#reset-game").on("click", function () {
    resetGame()
});

// listen for click of all answer buttons
$(".flag-choice").on("click", function () {
    
    // capture ID of clicked button 
    idButton = this.id;
    // shuffled array - answer 1 is the correct answer but shown in alternate positions
    if (idButton == "answer1") {
        $('#answer1').html(`<h3>Correct</h3>`)
        correctQuestions.innerText = parseInt(correctQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
    } else {
        //all other answer are therefore incorrect 
        $("#" + idButton).html(`<h3>Wrong</h3>`)
        $('#answer1').addClass('btn-success').removeClass('btn-info');
        wrongQuestions.innerText = parseInt(wrongQuestions.innerText) + 1;
        askedQuestions.innerText = parseInt(askedQuestions.innerText) + 1;
    }
    //disable buttons after click so no more choices possible 
    ///so player see if corect or Wrong - enable next 
    $('#answer1').prop('disabled', true);
    $('#answer2').prop('disabled', true);
    $('#answer3').prop('disabled', true);
    $('#answer4').prop('disabled', true);
    $('#next-button').prop('disabled', false);
    
    // check to see if we have played max questions 
    sumQuestions = parseInt(correctQuestions.innerText, 10) + parseInt(wrongQuestions.innerText, 10);
       //game end modal scores 

       $("#c-score").text("Correct Answers  " + correctQuestions.innerText)
       $("#w-score").text("Wrong answers  " + wrongQuestions.innerText)
       $("#t-score").text("Total Answered  " + sumQuestions)
    if (maxQuestions == sumQuestions) {
        console.log("exit = true")
        return resetGame() 
    }
    resetState()
});

function resetState() {
    // reset button states so after click of next, enable answer buttons 
    $('#next-button').on("click", function () {
    $('#answer1').prop('disabled', false);
    $('#answer2').prop('disabled', false);
    $('#answer3').prop('disabled', false);
    $('#answer4').prop('disabled', false);
    $('#answer1').addClass('btn-info').removeClass('btn-success');

    // disable next button
    $('#next-button').prop('disabled', true);
    // call game start 
    initNewgame()
    });
}

function resetGame () {
    $("#targ-flag").attr('src','assets/img/start-game.jpg');
    $(".flag-choice").html("&nbsp")
    $('.flag-choice').prop('disabled', false);
    $("#GameEndModal").modal('show');
    resetScore()
}
    

