// comment - load flag index 
// call random to get random index flag 
// 
//display flag -eg use index to reference img asset
//user now selcts radio button 
//listen for submit

console.log("connected")

// Wait for the DOM to finish loading before running the game
// // Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "answer1") {
                alert("You clicked answer1");
                console.log("ans1")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
      });
//     }
// function hide() {
//     // document.getElementById('gameBody').hidden = true
//     // document.getElementById('gameBody').style.display = 'none'
//     document.getElementById("gameBody").classList.add("hide")
//  }
//  function show() {
//     // document.getElementById('gameBody').hidden = false
//     // document.getElementById('gameBody').style.display = 'none'
//  }
