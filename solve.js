// color pool
colorPool = ['blue', 'green', 'yellow', 'red'];

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

var colorArray = Array();

// Define pointer variable to keep track of user progress
var pointer=0;


function checkInput(color){

    //Hidding H1 element if the game is active

    var hiddenElement = document.getElementById("level-title");

    if( !(hiddenElement.style.visibility === "hidden") ){
        hiddenElement.style.visibility = "hidden";
    }

    //document.getElementById("level-title").style.display = "none";

    // check if it is first click
    if (colorArray.length == 0){
        // record 
        playSound(color)
        colorArray.push(color);
        addRandom();
        playPattern();
    }
    else {
        // check if color is correct
        var correct;

      
        if (colorArray[pointer] == color){
            correct = true;
        }

        if (correct) {
            // add sound
            playSound(color);
            if (pointer == (colorArray.length -1)){
                pointer = 0;
                addRandom();
                playPattern();
            }
            else{
                pointer++;
            }

        }
        else {
            // end game and reset variable
            pointer = 0;
            colorArray = [];
            wrongBeat.play();
            // display Game Over
            hiddenElement.style.visibility = "visible";
            hiddenElement.innerHTML = "You lost, please try again.";
        }
    }

}

function addRandom(){
    // generate some random value and add it to array
    var i = Math.floor(Math.random() * 4);
    colorArray.push(colorPool[i]);    
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playPattern(){
    // light the colors and play the sound of the color
    await sleep(1000);
    var color;
    for (let i = 0; i < colorArray.length; i++) {
        color = colorArray[i];
        document.getElementById(color).style.opacity = "0.2";
        playSound(color);
        await sleep(500);
        document.getElementById(color).style.opacity = "0.8";
    }
    }

function playSound(color){
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

function changeOpacity(color){
    color.style.opacity = "0.2";
}

function returnOpacity(color){
    color.style.opacity = "0.8";
}

