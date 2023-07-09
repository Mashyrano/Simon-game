/*
    Red bg when lost using jQuery**
    show level as you rise through the ranks**
    play sound using path**
    change opacity by changing class using JQUERY on event listener**
*/



// load sounds
/*let blueBeat = new Audio('/sounds/blue.mp3');
let redBeat = new Audio('/sounds/red.mp3');
let greenBeat = new Audio('/sounds/green.mp3');
let yellowBeat = new Audio('/sounds/yellow.mp3');*/
let wrongBeat = new Audio('/sounds/wrong.mp3');

// Add event listeners
/*document.querySelector("#blue").addEventListener("click", function () {checkInput('blue');});
document.querySelector("#green").addEventListener("click", function () {checkInput('green');});
document.querySelector("#red").addEventListener("click", function () {checkInput('red');});
document.querySelector("#yellow").addEventListener("click", function () {checkInput('yellow');});*/

$(".btn").click(function(){checkInput(this.id); });

// Define variables
var colorArray = Array(); // pattern array
colorPool = ['blue', 'green', 'yellow', 'red']; // color pool
var pointer=0; // pointer variable to keep track of user progress
var ready = true; // ready to accept input
var level = 0; //keeping track of the level

// Define Functions

async function checkInput(color){
    /*Handles user input*/

    //Hidding H1 element if the game is active


    //document.getElementById("level-title").style.display = "none";

    // check if we are ready to take input
    if (ready){

        // check if it is first click
        if (colorArray.length == 0){
           // play and change opacity
            //document.getElementById(color).style.opacity = "0.2";
            $("#" + color).addClass("pressed");
            playSound(color)
            await sleep(100);
            //document.getElementById(color).style.opacity = "0.8";
            $("#" + color).removeClass("pressed");
            // record
            colorArray.push(color);
            level++;
            addRandom();
            ready=false;
            playPattern();

            $("#level-title").text("Level " + level);
        }
        else {
            // check if color is correct
            var correct;      
            if (colorArray[pointer] == color){
                correct = true;
            }

            if (correct) {
                // play sound and change opacity
                //document.getElementById(color).style.opacity = "0.2";
                $("#" + color).addClass("pressed");
                playSound(color);
                await sleep(100);
                //document.getElementById(color).style.opacity = "0.8";
                $("#" + color).removeClass("pressed");
                // add random or continue listening

                if (pointer == (colorArray.length -1)){
                    pointer = 0;
                    addRandom();
                    ready = false;
                    level++;
                    playPattern();

                    $("#level-title").text("Level " + level);

                }
                else{
                    pointer++;
                }

            }
            else {
                // end game and reset variable
                pointer = 0;
                level = 0;
                colorArray = [];
                $("body").addClass("game-over");
                wrongBeat.play();
                await sleep(500);
                // display Game Over
                hiddenElement.style.visibility = "visible";
                $("body").removeClass("game-over");
                $("#level-title").text("You lost, please try again.");

            }
        }
    }

}

function addRandom(){
    // generates some random value and adds it to array
    var i = Math.floor(Math.random() * 4);
    colorArray.push(colorPool[i]);    
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playPattern(){
    // plays the pattern in colorArray
    await sleep(1000);
    var color;
    for (let i = 0; i < colorArray.length; i++) {
        color = colorArray[i];
        //document.getElementById(color).style.opacity = "0.2";
        $("#" +  color).addClass("pressed");
        playSound(color);
        await sleep(500);
        //document.getElementById(color).style.opacity = "0.8";
        $("#" +  color).removeClass("pressed");
        await sleep(100);
    }
    ready=true;
}

/*function playSound(color){
    // plays the respecive sound and change opacity
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
}*/


function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}


