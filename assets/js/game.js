let maxQuestions = 25;

const totalQuestions = document.getElementById("questions-total");
const askedQuestions = document.getElementById("questions-asked");
const correctQuestions = document.getElementById("questions-correct");
const wrongQuestions = document.getElementById("questions-wrong");
const gameStart = document.getElementById("start-game");

// set max question and write to page 
totalQuestions.innerText = maxQuestions;

console.log("connected")

// Wait for the DOM to finish loading before running the game startr
// Get the button for start game and add event listeners for click.
document.addEventListener("DOMContentLoaded", function() {
         gameStart.addEventListener("click", initNewgame);
       
    });
function initNewgame() {
    alert("submit pressed");
}
    //load countries - eg 1 x flag and 4 x country names  
    // write flag to Page 
    // write 4 x country names to asnwer 1 ,2,3,4 
    // listen for buttons answer - 
    
    // retrieve country name e.g read inner html)
    
    // compare answer to country name correct or Incorect 
    // ?? right to innerghtml green or red, incrrment scores  
    //   



// call function to shuffle the selectedCountries
// shuffleCountries(selectedCountries);

// function shuffleCountries(selectedCountries) {
    // randomly shuffle the array of selectedCountries
    //return selectedCountries.sort(() => Math.random() - 0.5);
//}