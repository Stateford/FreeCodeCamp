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

//LOCKOUT
var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;
var s5 = false;
var s6 = false;
var s7 = false;
var s8 = false;
var s9 = false;
var lockout = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

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
    spacesLeft.splice(spacesLeft.indexOf(arg), 1);
    turnCount++;
    lastTurn = arg;
        
    if(arg === 's1' && s1 === false) {
        horiz[0].push(input);
        vert[0].push(input);
        diag[0].push(input);
        s1 = true;
    }
    else if(arg === 's2' && s2 === false) {
        horiz[0].push(input);
        vert[1].push(input);
        s2 = true;
    }
    else if(arg === 's3' && s3 === false) {
        horiz[0].push(input);
        vert[2].push(input);
        diag[1].push(input);
        s3 = true;
    }
    else if(arg === 's4' && s4 === false) {
        horiz[1].push(input); 
        vert[0].push(input);
        s4 = true
    }
    else if(arg === 's5' && s5 === false) {
        horiz[1].push(input);
        vert[1].push(input);
        diag[0].push(input);
        diag[1].push(input);
        s5 = true;
    }
    else if(arg === 's6' && s6 === false) {
        horiz[1].push(input);
        vert[2].push(input);
        s6 = true;
    }
    else if(arg === 's7' && s7 === false) {
        horiz[2].push(input);
        vert[0].push(input);
        diag[1].push(input);
        s7 = true;
    }
    else if(arg === 's8' && s8 === false) {
        horiz[2].push(input);
        vert[1].push(input);
        s8 = true;
    }
    else if(arg === 's9' && s9 === false) {
        horiz[2].push(input);
        vert[2].push(input);
        diag[0].push(input);
        s9 = true;
    }
};

//AI
var computerPlayer = function() {
    spacesLeft.sort();
    computerOrder.sort();
    playerOrder.sort();
    
    //CHECK IF PLAYER ABOUT TO WIN
    function midCheck() {
        if(playerTwo === 'o') {
            for(var i = 0; i < horiz.length; i++) {
                if(horiz[i].toString() === 'x,x') {
                    return horiz[i];
                }
            }
            for(var l = 0; l < vert.length; l++) {
                    if(vert[l].toString() === 'x,x') {
                        return vert[l];
                    }
            }
            for(var k = 0; k < diag.length; k++) {
                if(diag[k].toString() === 'x,x') {
                    return diag[k];
                }
            }
            return null;
        }
        
        else if(playerTwo === 'x') {
            for(var i = 0; i < horiz.length; i++) {
                if(horiz[i].toString() === 'x,x') {
                    return horiz[i];
                }
            }
            for(var l = 0; l < vert.length; l++) {
                if(vert[l].toString() === 'x,x') {
                return vert[l];
                }
            }
            for(var k = 0; k < diag.length; k++) {
                if(diag[k].toString() === 'x,x') {
                return diag[k];
                }
            }
            return null;
        }
    };
    
    
    //COMPUTER GOES FIRST
    
    //FIRST TURN
    if(turnCount === 0) {
        var random = Math.round(Math.random() * 4);
        var randomInput = ['s1', 's3', 's7', 's9'];

        input(randomInput[random], playerTwo);
        computerOrder.push(randomInput[random]);
    }
    
    //TURN TWO
    else if(turnCount === 2) {
        if(computerOrder[0] === 's1') {
            if(s9 === false) {
            computerOrder.push('s9')
            input('s9', playerTwo);
            }
            else if(s3 === false) {
                computerOrder.push('s3')
                input('s3', playerTwo);
            }
            else if(s7 === false) {
                computerOrder.push('s7')
                input('s7', playerTwo);
            }
            else {
                var random = Math.round(Math.random() * spacesLeft.length);
                
                computerOrder.push(spacesLeft[random]);
                input(spacesLeft[random], playerTwo);
            }
        }
        else if(computerOrder[0] === 's3') {
            if(s7 === false) {
                computerOrder.push('s7');
                input('s7', playerTwo);
            }
            else if(s1 === false) {
                computerOrder.push('s1');
                input('s1', playerTwo);
            }
            else if(s9 === false) {
                computerOrder.push('s9');
                input('s9', playerTwo);
            }
            else {
                var random = Math.round(Math.random() * spacesLeft.length);
                
                computerOrder.push(spacesLeft[random]);
                input(spacesLeft[random], playerTwo);
            }
        }
        else if(computerOrder[0] === 's7') {
            if(s3 === false) {
                computerOrder.push('s3');
                input('s3', playerTwo);
            }
            else if(s1 === false) {
                computerOrder.push('s1');
                input('s1', playerTwo);
            }
            else if(s9 === false) {
                computerOrder.push('s9');
                input('s9', playerTwo);
            }
            else {
                var random = Math.round(Math.random() * spacesLeft.length);
                
                computerOrder.push(spacesLeft[random]);
                input(spacesLeft[random], playerTwo);
            }
        }
        else if(computerOrder[0] === 's9') {
            if(s1 === false) {
                computerOrder.push('s1');
                input('s1', playerTwo);
            }
            else if(s3 === false) {
                computerOrder.push('s3');
                input('s3', playerTwo);
            }
            else if(s7 === false) {
                computerOrder.push('s7');
                input('s7', playerTwo);
            }
            else {
                var random = Math.round(Math.random() * spacesLeft.length);
                
                computerOrder.push(spacesLeft[random]);
                input(spacesLeft[random], playerTwo);
            }
        }
    }
    
    //TURN THREE
    else if(turnCount === 4) {
        if(midCheck() !== null) {
            
        }
    }
};

//PLAYERINPUT
var playerInput = function(arg, input) {
    playerOrder.push(arg);
    input(arg, input);
};

//WINCHECK
var winCheck = function() {
    //HORIZONTAL CHECK
    for(var i = 0; i < horiz.length; i++) {
        if(horiz[i].length === 3) {
            if(horiz[i].toString() === 'x,x,x') {
                if(playerOne = 'x') {
                    return "playeronewin";
                }
                else if(playerTwo = 'x') {
                    return "playertwowin";
                }
            }
            else if(horiz[i].toString() === 'o,o,o') {
                if(playerOne = 'o') {
                    return "playeronewin";
                }
                else if(playerTwo === 'o') {
                    return "playertwowin";
                }
            }
        }
    }
    
    //VERTICAL CHECK
    for(var l = 0; l < vert.length; l++) {
        if(vert[l].length === 3) {
            if(vert[l].toString() === 'x,x,x') {
                if(playerOne = 'x') {
                    return 'playeronewin';
                }
                else if(playerTwo = 'x') {
                    return 'playertwowin';
                }
            }
            else if(vert[l].toString() === 'o,o,o') {
                if(playerOne = 'o') {
                    return 'playeronewin';
                }
                else if(playerTwo = 'o') {
                    return 'playertwowin';
                }
            }
        }
    }
    
    //DIAGONAL CHECK
    for(var k = 0; k < diag.length; k++) {
        if(diag[k].length === 3) {
            if(diag[k].toString() === 'x,x,x') {
                if(playerOne = 'x') {
                    return 'playeronewin';
                }
                else if(playerTwo = 'x') {
                    return 'playertwowin';
                }
            }
            else if(diag[k].toString() === 'o,o,o') {
                if(playerOne = 'o') {
                    return 'playeronewin';
                }
                else if(playerTwo ='o') {
                    return 'playertwowin';
                }
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
    if(arg = '1') {
        playerTurn = true;
        computerTurn = false;
    }
    else if(arg === '2') {
        playerTurn = false;
        computerTurn = true;
    }
};

//GAMEOVER
var gameOver = function() {
    gameLive = false;
    playerTurn = false;
    computerTurn = false;
    spacesLeft = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
    playerOrder = [];
    computerOrder = [];
    lastTurn = '';
    turnCount = 0;
};

//JQuery
//$(document).ready(function() {
//    
//    //START BUTTON
//    $('.start').click(function() {
//        gameStart();
//        firstTurn($('.firstturn').val());
//        playerID($('.playerid').val());
//    });
//    
//    
//
//});

