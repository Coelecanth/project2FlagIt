/* jshint esversion: 11, jquery: true */
let shuffled;
let maxQuestions = 25;
let flagImage = document.getElementById("targ-flag");
let flagChoices = document.querySelectorAll(".flag-choice");
let currentFlag = 1;


const totalQuestions = document.getElementById("questions-total");
const askedQuestions = document.getElementById("questions-asked");
const correctQuestions = document.getElementById("questions-correct");
const wrongQuestions = document.getElementById("questions-wrong");
const gameStart = document.getElementById("start-game");


// set max question and write to page 
totalQuestions.innerText = maxQuestions;
askedQuestions.innertext = "Questions 0/"
correctQuestions.innerText = "Correct Answer = 0" 
wrongQuestions.innerText = "Wrong Answer = 0" 

console.log("connected")

// Wait for the DOM to finish loading before running the game startr
// Get the button for start game and add event listeners for click.
$(document).ready(function () {
    $(gameStart).click(initNewgame);
});

function initNewgame() {
    // Shuffle array
    shuffled = countryArray.sort(() => 0.5 - Math.random());
    getFlag();
}
    

//load countries - eg 1 x flag and 4 x country names  
    // write flag to Page 
    // write 4 x country names to asnwer 1 ,2,3,4 
    // listen for buttons answer - 
    
    // retrieve country name e.g read inner html)
    
    // compare answer to country name correct or Incorect 
    // ?? right to innerghtml green or red, incrrment scores  
    //   



// Get sub-array of first n elements after shuffled
// let selected = shuffled.slice(0, 4);
// console.log(selected)


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



/// jquery to change color of buttions on wrong 

$('#answer1').click(function (){
  $('#answer1').addClass('red_button')
});
$('#answer2').click(function (){
    $('#answer2').addClass('red_button')
});
$('#answer3').click(function (){
    $('#answer3').addClass('red_button')
});
  $('#answer4').click(function (){
    $('#answer4').addClass('red_button')
});

