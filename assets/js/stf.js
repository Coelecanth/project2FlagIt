/* jshint esversion: 11, jquery: true */
let shuffled;
let flagImage = document.getElementById("targ-flag");
let flagChoices = document.querySelectorAll(".flag-choice");
let currentFlag = 1;

// Wait for the DOM to finish loading before running the game start
// Get the button for start game and add event listeners for click.
$(document).ready(function () {

  flagInit();

  function flagInit() {
    // Shuffle the array, loads the array and shuffles it countryArray in flag-dict.js  
    shuffled = countryArray.sort(() => 0.5 - Math.random());
    getFlag();
  }

  // performs the main function of the page loads the flag and displays the name from locale  
  function getFlag() {
    $(flagImage).attr("src", `assets/img/${shuffled[currentFlag].flagName}`);
    $(flagChoices).each(function (i, choice) {
      let buttonId = choice.id;
      let arrayIndex = buttonId.replace("answer", "");
      choice.innerText = shuffled[arrayIndex].locale;
      let randomOrder = Math.floor(Math.random() * 4) + 1;
      $(choice).css("order", randomOrder);
    });
  }

  // listen for click of load flag button
  $("#load-flags").on("click", function () {

    // load flag /next flag
    flagInit();

  });
});