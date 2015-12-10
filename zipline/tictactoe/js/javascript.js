//GAME VARS
var gameLive = false;
var playerTurn = false;
var computerTurn = false;
var spacesLeft = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
var playerOrder = [];
var computerOrder = [];
var lastTurn = '';
var turnCount = 0;
var winCount = 0;
var playerOne = 'x';
var playerTwo = 'o';

//WIN COND
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

//PLAYER INPUT
var input = function(arg, input) {
    spacesLeft.slice(spacesLeft.indexOf(arg), '');
    turnCount++;
    lastTurn = arg;
    if(arg === 's1' || arg === 's2' || arg === 's3') {
        horiz[0].push(input);
        if(arg === 's1') {
            vert[0].push(input);
            diag[0].push(input);
        }
        else if(arg === 's2') {
            vert[1].push(input);
        }
        else if(arg === 's3') {
            vert[2].push(input);
            diag[1].push(input);
        }
    }
    else if(arg === 's4' || arg === 's5' || arg === 's6') {
        horiz[1].push(input);
        if(arg === 's4') {
            vert[0].push(input);
        }
        else if(arg === 's5') {
            vert[1].push(input);
            diag[0].push(input);
            diag[1].push(input);
        }
        else if(arg === 's6') {
            vert[2].push(input);
        }
    }
    else if(arg === 's7' || arg === 's8' || arg === 's9') {
        horiz[2].push(input);
        if(arg === 's7') {
            vert[0].push(input);
            diag[1].push(input);
        }
        else if(arg === 's8') {
            vert[1].push(input);
        }
        else if(arg === 's9') {
            vert[2].push(input);
            diag[0].push(input);
        }
    }
};

//AI
var computerPlayer = function() {
    spacesLeft.sort();
    computerOrder.sort();
    playerOrder.sort();
    
    //FIRST TURN
    if(spacesLeft.length === 9) {
        var random = Math.round(Math.random() * 4);
        var randomInput = ['s1', 's3', 's7', 's9'];
        input(randomInput[random], playerTwo);
        console.log(randomInput[random]);
    }
};


/*
FIX WIN CHECK
*/

//WIN
//PLAYER ONE
var playerOneWin = function() {
    gameLive = false;
    if(winCheck() === true) {
        return true;
    }
    else if(winCheck() === false) {
        return false;
    }
};

//PLAYER TWO
var playerTwoWin = function() {
    gameLive = false;
    if(wincheck() === true) {
        return false;
    }
    else if(wincheck() === false) {
        return true;
    }
};


//WINCHECK
var winCheck = function() {
    //HORIZONTAL CHECK
    for(var i = 0; i < horiz.length; i++) {
        if(horiz[i].length === 3) {
            if(horiz[i].toString() === 'x,x,x') {
                return true;
            }
            else if(horiz[i].toString() === 'o,o,o') {
                return false;
            }
        }
    }
    
    //VERTICAL CHECK
    for(var l = 0; l < vert.length; l++) {
        if(vert[l].length === 3) {
            if(vert[l].toString() === 'x,x,x') {
                return true;
            }
            else if(vert[l].toString() === 'o,o,o') {
                return false;
            }
        }
    }
    
    //DIAGONAL CHECK
    for(var k = 0; k < diag.length; k++) {
        if(diag[k].length === 3) {
            if(diag[k].toString() === 'x,x,x') {
                return true;
            }
            else if(diag[k].toString() === 'o,o,o') {
                return false;
            }
        }
    }
};

//GAMESTART
var gameStart = function() {
    var gameLive = true;
};

//GAME RESET
var gameReset = function() {
    var playerTurn = false;
}

//PLAYER ID
var playerID = function(arg) {
    if(arg === 'x') {
        playerOne = 'x';
        playerTwo = 'o';
    }
    else if(arg === 'o') {
        playerOne = 'o';
        playerTwo = 'x';
    }
};

//FIRST TURN
var firstTurn = function(arg) {
    if(arg = playerOne) {
        playerTurn = true;
        computerTurn = false;
    }
    else if(arg === playerTwo) {
        playerTurn = false;
        computerTurn = true;
    }
};

input('s1', playerOne);
console.log(spacesLeft.indexOf('s1'));
console.log(spacesLeft);