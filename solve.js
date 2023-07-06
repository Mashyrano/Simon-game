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
    /* check user if user clicked the correct color */
    if (arr[pointer] == color){
        pointer += 1
    }
    else{
        pointer = -1
        /*end game*/
    }
    
}

function addRandom(){
    // generate some random value and add it to array
}

function playPattern(){
    // light the colors and play the sound of the color
}

