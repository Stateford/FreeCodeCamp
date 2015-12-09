//GAME
var playerTurn = false;
var simonTurn = true;
var gameLive = false;
var colors = ["red", "yellow", "blue", "green"];
var turnCount = 0;
var hardcore = true;


//DETERMINE RANDOM COLOR
var randomColor = function() {
    var random = Math.round(Math.random() * 3);
    return colors[random];
};

//SIMON GLOBAL
var simonOrder = [];


//PLAYER
var playerOrder = [];

var playerInput = function(color) {
    playerOrder.push(color);
    playerTurn = false;
    simonTurn = true;
}


//IS EQUAL
//THIRD-PARTY API

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

//CHECK
var orderCheck = function() {
    if(simonOrder.equals(playerOrder)) {
        return true;
    }
    else {
        return false;
    }
}



//SIMON AI

var simonSays = function() {
    while(simonTurn) {
        simonOrder.push(randomColor());

        //DISPLAY SIMONORDER
//        simonDisp();

        //END OF TURN
        playerTurn = true;
        simonTurn = false;
    }
};





//START GAME
var startGame = function() {
    if (gameLive === false) {
        turnCount = 0;
        playerTurn = false;
        simonOrder = [];
        simonTurn = true;
        gameLive = true;
        simonSays();
    }
};

//RESET GAME
var resetGame = function() {
    turnCount = 0;
    playerTurn = false;
    simonTurn = true;
    simonOrder = [];
    playerOrder = [];
    simonSays();
};




//GAMEOVER
var gameOver = function() {

    //HARDCORE
    if(hardcore) {
        gameLive = false;
        simonTurn = false;
        turnCount = 0;
        playerTurn = false;
        simonOrder = [];
        playerOrder = [];
    }

    //CASUAL
    else if(hardcore === false) {
        playerOrder.pop();
        simonDisp();
    }
};



//DEBUGGER
simonSays();
playerInput('yellow');
simonSays();


console.log(simonOrder);
console.log(playerOrder);
console.log(orderCheck());