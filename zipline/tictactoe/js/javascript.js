//GAME VARS
var playerOne = 'x';
var playerTwo = 'o';
var twoPlayer = true;
var gameLive = false;
var playerTurn = 1;

//WIN CON
var horiz = [
    [], 
    [], 
    []
];

var vert = [
    [],
    [],
    []
];

var diag = [
    [],
    []
];


//WIN CHECKER
var winCheck = function() {
    //TO STRING FOR COMPARE
    
    var toString = function(arr) {
        arr.toString();
    }
    
    //PLAYERONE
    if(playerOne = 'x') {
        //HORIZONTAL
        for(var i = 0; i < horiz.length; i++) {
            if(toString(horiz[i]) === 'xxx') {
                return playerOneWin;
            }
            else if(toString(horiz[i]) === 'ooo') {
                return playerTwoWin;
            }
        }
        for(var x = 0; x < vert.length; x++) {
            if(toString(vert[x]) === 'xxx') {
                return playerOneWin;
            }
            else if(toString(vert[x]) === 'ooo') {
                playerTwoWin;
            }
        }
        for(var z = 0; z < diag.length; z++) {
            if(toString(diag[z]) === 'xxx') {
                return playerOneWin;
            }
            else if(toString(diag[z]) === 'ooo') {
                return playerTwoWin;
            }
        }
    }
};

//START GAME
var startGame = function() {
    gameLive = true;
};

//RESET GAME
var resetGame = function() {
    playerOne = true;
};

//RANDOM TURN
var randomTurn = function() {
    var random = Math.round(Math.random() * (2 - 1) + 1);
    playerTurn = random;
};

var gameOver = function() {
    gameLive = false;
};
