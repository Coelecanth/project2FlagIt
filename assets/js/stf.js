

console.log("connected")
const btnStudy = document.getElementById("study-btn");

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

generateStudy();

    function generateStudy() {
        // generate a dynamic list of all countries on page load
        countryArray.forEach(country => {
            studyContainer.innerHTML += `
                <div class="study-row txt-white modal-open" data-modal="study" 
                data-country="${country.locale}" 
                data-flag="${country.flag}">
                </div>`;
        });
    }

