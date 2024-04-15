let maxQuestions = 25;

const totalQuestions = document.getElementById("questions-total");
const askedQuestions = document.getElementById("questions-asked");
const correctQuestions = document.getElementById("questions-correct");
const wrongQuestions = document.getElementById("questions-wrong");
const gameStart = document.getElementById("start-game");

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

gameStart.addEventListener("click", initNewgame);

function initNewgame() {
    alert("submit pressed");
    generateStudy();

}

function generateStudy() {
    // generate a dynamic list of all countries on page load
    countryArray.forEach(country => {
        studyContainer.innerHTML += `
            <div class="study-row txt-white modal-open" data-modal="study" 
            data-country="${country.locale}" 
            data-iso="${country.flag}">
            </div>`;
    });
}

