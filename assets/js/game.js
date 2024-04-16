let maxQuestions = 25;

const totalQuestions = document.getElementById("questions-total");
const askedQuestions = document.getElementById("questions-asked");
const correctQuestions = document.getElementById("questions-correct");
const wrongQuestions = document.getElementById("questions-wrong");
const gameStart = document.getElementsByTagName("button");

// comment - load flag index 
// call random to get random index flag 
// 
//display flag -eg use index to reference img asset
//user now selcts radio button 
//listen for submit

console.log("connected")

totalQuestions.innerText = maxQuestions;

// Wait for the DOM to finish loading before running the game startr
// Get the button elements and add event listeners for 

// gameStart.addEventListener("click", initNewgame);

document.addEventListener("DOMContentLoaded", function() {
        for (let button of gameStart ) {
        button.addEventListener("click", function() {
            switch (selectedGame) {
                case "allflags-game":
                    maxQuestions = countryArray.length;
                    totalQuestions.innerText = maxQuestions;
                    newAllFlags()
                    break;
        
                case "europe-game":
                    maxQuestions = 25;
                    newAllFlags()
                    break;
                case "americas-game":
                    maxQuestions = 25;
                    break;
                     
                case "asia-game":
                    maxQuestions = 25;
                    break;
                case "oceania-game":
                    maxQuestions = 25;
                    break;
                case "africa - game":
                    maxQuestions = 25;
                    break;
                default:
                    selectedGame = "short-game"
                    maxQuestions = 25;
                    break;
            }
        });
    }
});

function initNewgame() {
    alert("submit pressed");
    // determine which game has been selected
   



}

// call function to shuffle the selectedCountries
shuffleCountries(selectedCountries);

function shuffleCountries(selectedCountries) {
    // randomly shuffle the array of selectedCountries
    return selectedCountries.sort(() => Math.random() - 0.5);
}