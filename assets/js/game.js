/* jshint esversion: 11, jquery: true */
let shuffled;
let sumQuestions;
var idButton;
let maxQuestions = 10;
let intialCorrect = 0;
let intialWrong = 0;
let intialAsked = 0;
let pVal;
let pNew;
let gameFilter = "All"

let flagImage = document.getElementById("targ-flag");
let flagChoices = document.querySelectorAll(".flag-choice");
let currentFlag = 1;

const totalQuestions = document.getElementById("questions-total");
const askedQuestions = document.getElementById("questions-asked");
const correctQuestions = document.getElementById("questions-correct");
const wrongQuestions = document.getElementById("questions-wrong");
const gameStart = document.getElementById("start-game");
const gameImg = "assets/img/start-game-new.avif"

console.log("connected")

resetScore()
// set max question and zero values and write to page 
function resetScore() {
    totalQuestions.innerText = maxQuestions;
    correctQuestions.innerText = intialCorrect
    wrongQuestions.innerText = intialWrong
    askedQuestions.innerText = intialAsked
}
// Wait for the DOM to finish loading before running the game start
// Get the button for start game and add event listeners for click.
$(document).ready(function () {
    $("#game-over-mess").hide();
    // changed this from hide as
    $("#next-button").hide();
    $('#game-options').prop('disabled', true);
    // $("#next-button").hide();
    $("#reset-game").hide();
    //hides game type being played at intial load 
    $(".ps-game").hide();

    $("#start-game").on("click", function () {
        //hides ps-game message of game type played on start of game eg resets message  
        $(".ps-game").hide();
        // writes to modal to clear down scores otherwise can report old scores if reset 
        $("#t-score").text("No Scores Available")
        $("#c-score").text("No Scores Available")
        $("#w-score").text("No Scores Available")
        //hide Game Bannr to give more space on screen while game is being played 
        $(".game-banner").hide();
            initNewgame()
    });
});
// modal on click functions for game options 
//change number of questions for each game
modChgQ()
function modChgQ() {
    $('.q-class').on("click", function () {
        maxQuestions = (this.id);
        totalQuestions.innerText = (this.id);

    });
}
//change game type is eg flags by region
modChgFg()
function modChgFg() {
    $('.f-class').on("click", function () {
        gameFilter = (this.id);
        if (gameFilter != "All") {
            // call function to creat new arry with territory filter 
            arrFilter(gameFilter)
            //show text with game type on page
            $(".ps-game").show();
            $("#" + "flag-game-type").html(gameFilter + ` Flags`)
            
        } else { 
            // call initNewgame(gameFilter) 
            // gameFilter is set to "All" when defined 
        }
         

    });
}

function initNewgame() {
    // show next and reset tbutton after start button pressed 
    $("#game-over-mess").hide();
    $("#next-button").show();
    $("#reset-game").show();
    // Shuffle array, loads the array and shuffles it  
    shuffled = countryArray.sort(() => 0.5 - Math.random());
    // disable game options button 
    $('#game-options').prop('disabled', true);
    //enable all answer buttons, post reset 
    $(".flag-choice").prop('disabled', false);
    getFlag();
}

function arrFilter(idRegion) {
    let filteredArr = [];
    for (let i = 0; i < shuffled.length; i++) {
        if (shuffled[i].territory === idRegion) {
            filteredArr = [...filteredArr, shuffled[i]];
        }
    }
    console.log(filteredArr);
}



function getFlag() {

    $(flagImage).attr("src", `assets/img/${shuffled[currentFlag].flagName}`);
    $(flagChoices).each(function (i, choice) {
        let buttonId = choice.id;
        let arrayIndex = buttonId.replace("answer", "");
        // locale is the country field name from the dictionary 
        choice.innerText = shuffled[arrayIndex].locale;
        let randomOrder = Math.floor(Math.random() * 4) + 1;
        $(choice).css("order", randomOrder);
        $('#start-game').prop('disabled', true);
    });
};

// listen for reset game click of 
$("#reset-game").on("click", function () {
    // zero scores for next game
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
    $('#start-game').prop('disabled', true);

    // check to see if we have played max questions 
    sumQuestions = parseInt(correctQuestions.innerText, 10) + parseInt(wrongQuestions.innerText, 10);
    //game end modal scores 

    $("#t-score").text("Total Answered  " + sumQuestions)
    $("#c-score").text("Correct Answers  " + correctQuestions.innerText)
    $("#w-score").text("Wrong answers  " + wrongQuestions.innerText)

    if (maxQuestions == sumQuestions) {
        $("#game-over-mess").show();
        $("#next-button").hide();
        return setTimeout(resetGame, 2500);
    }
    resetState()
});

function resetState() {
    // set buttons and active to play next question
    // reset button states so after click of next, enable buttons for answer 
    $('#next-button').on("click", function () {
        $('#answer1').prop('disabled', false);
        $('#answer2').prop('disabled', false);
        $('#answer3').prop('disabled', false);
        $('#answer4').prop('disabled', false);
        $('#answer1').addClass('btn-info').removeClass('btn-success');

        // disable next button
        $('#next-button').prop('disabled', true);
        $('#start-game').prop('disabled', false);
        
        // call game start 
        initNewgame()
    });
}

function resetGame() {
    // hide next and reset button after end of game/reset button pressed 
    $("#next-button").hide();
    $("#reset-game").hide();
    //load default values to page 
    $("#targ-flag").attr('src', gameImg);
    $(".flag-choice").html("&nbsp")
    $('.flag-choice').prop('disabled', false);
    // enable start button - for new game  
    $('#start-game').prop('disabled', false);
    // remove green button after last answer is wrong 
    $('#answer1').addClass('btn-info').removeClass('btn-success');
    //disable all answer buttons, so as to not leave game in unknown state 
    $(".flag-choice").prop('disabled', true);
    // show modal with game summary
    $("#GameEndModal").modal('show');
    // zero scores for next game
        resetScore()
    // enables game options after game end 
    $('#game-options').prop('disabled', false);
    // show banner post game 
    $(".game-banner").show();
    
}