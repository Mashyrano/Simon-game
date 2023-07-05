// load sounds
let blueBeat = new Audio('/sounds/blue.mp3');
let redBeat = new Audio('/sounds/red.mp3');
let greenBeat = new Audio('/sounds/green.mp3');
let yellowBeat = new Audio('/sounds/yellow.mp3');
let wrongBeat = new Audio('/sounds/wrong.mp3');

// Add event listeners
document.querySelector("#blue").addEventListener("click", function () {checkInput('blue');});
document.querySelector("#green").addEventListener("click", function () {checkInput('green');});
document.querySelector("#red").addEventListener("click", function () {checkInput('red');});
document.querySelector("#yellow").addEventListener("click", function () {checkInput('yellow');});
/*
Define Global Array
    blue
    red
    green
    yellow
*/
var arr = Array();

// Define pointer variable to keep track of user progress
var pointer;


function checkInput(color){

    //Hidding H1 element if the game is active

    var hiddenElement = document.getElementById("level-title");

    if( !(hiddenElement.style.visibility === "hidden") ){
        hiddenElement.style.visibility = "hidden";
    }

    //document.getElementById("level-title").style.display = "none";

    // check if color is correct
    var correct = true;
    if (correct) {
        // add sound
        if (color == 'green'){
            greenBeat.play();
        }
        else if (color == 'blue'){
            blueBeat.play();
        }
        else if (color == 'red'){
            redBeat.play();
        }
        else {
            yellowBeat.play();
        }
    }

}

function addRandom(){
    // generate some random value and add it to array
}

function playPattern(){
    // light the colors and play the sound of the color
}

function changeOpacity(color){
    color.style.opacity = "0.2";
}

function returnOpacity(color){
    color.style.opacity = "0.8";
}