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
var lockout = [
    [s1, s2, s3], 
    [s4, s5, s6], 
    [s7, s8, s9]
];

var lockoutVert = [
    [s1, s4, s7],
    [s2, s5, s8],
    [s3, s6, s9]
];

var lockoutDiag = [
    [s1, s5, s9],
    [s3, s5, s7]
];

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
        }
        return null;
    };
    
    
    //COMPUTER GOES FIRST
    
    //FIRST TURN
    if(turnCount === 0 && computerTurn) {
        var random = Math.round(Math.random() * 3);
        var randomInput = ['s1', 's3', 's7', 's9'];

        input(randomInput[random], playerTwo);
        computerOrder.push(randomInput[random]);
    }
    
    //TURN TWO
    else if(turnCount === 2 && computerTurn) {
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
    else if(turnCount >= 4 && computerTurn) {
        if(midCheck() !== null) {
            
            function thisArr(arr) {
                for(var i = 0; i < arr.length; i++) {
                    
                    if(midCheck() === horiz[i]) {
                        for(var k = 0; k <lockout[0].length; k++) {
                            if(lockout[i][k] === false) {
                                if(i === 0) {
                                    switch(k) {
                                        case 0:
                                            input('s1', playerTwo);
                                            break;
                                        case 1:
                                            input('s2', playerTwo);
                                            break;
                                        case 2:
                                            input('s3', playerTwo);
                                            break;
                                        default:
                                            console.log('something went wrong');
                                            break;
                                    }
                                }
                                else if(i === 1) {
                                    switch(k) {
                                        case 0:
                                            input('s4', playerTwo);
                                            break;
                                        case 1:
                                            input('s5', playerTwo);
                                            break;
                                        case 2:
                                            input('s6', playerTwo);
                                            break;
                                        default:
                                            console.log('something went wrong');
                                            break;
                                    }
                                }
                                else if(i === 2) {
                                    switch(k) {
                                        case 0:
                                            input('s7', playerTwo);
                                            break;
                                        case 1:
                                            input('s8', playerTwo);
                                            break;
                                        case 2:
                                            input('s9', playerTwo);
                                            break;
                                        default:
                                            console.log('something went wrong');
                                            break;
                                    }
                                }
                            }
                        }
                    }
                    else if(midCheck() === vert[i]) {
                        for(var k = 0; k < lockoutVert[i].length; k++) {
                            if(lockoutVert[i][k] === false) {
                                if(i === 0) {
                                    switch(k) {
                                        case 0:
                                            input('s1', playerTwo);
                                            break;
                                        case 1:
                                            input('s4', playerTwo);
                                            break;
                                        case 2:
                                            input('s7', playerTwo);
                                        default:
                                            console.log('something went wrong');
                                            break;
                                    }
                                }
                                else if(i === 1) {
                                    switch(k) {
                                        case 0:
                                            input('s2', playerTwo);
                                            break;
                                        case 1:
                                            input('s5', playerTwo);
                                            break;
                                        case 2:
                                            input('s8', playerTwo);
                                            break;
                                        default:
                                            console.log('something went wrong');
                                            break;
                                    }
                                }
                                else if(i === 2) {
                                    switch(k) {
                                        case 0:
                                            input('s3', playerTwo);
                                            break;
                                        case 1:
                                            input('s6', playerTwo);
                                            break;
                                        case 2:
                                            input('s9', playerTwo);
                                            break;
                                        default:
                                            console.log('something went wrong');
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        else if(midCHeck() === diag[i]) {
                            for(var k = 0; k < lockoutDiag[i].length; k++) {
                                if(lockoutDiag[i][k] === false) {
                                    if(i === 0) {
                                        switch(k) {
                                            case 0:
                                                input('s1', playerTwo);
                                                break;
                                            case 1:
                                                input('s5', playerTwo);
                                                break;
                                            case 2:
                                                input('s9', playerTwo);
                                                break;
                                            default:
                                                console.log('something went wrong');
                                                break;
                                        }
                                    }
                                    else if(i === 1) {
                                        switch(k) {
                                            case 0:
                                                input('s3', playerTwo);
                                                break;
                                            case 1:
                                                input('s5', playerTwo);
                                                break;
                                            case 2:
                                                input('s7', playerTwo);
                                                break;
                                            default:
                                                console.log('something went wrong');
                                                break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
//            thisArr(midCheck());
        }
        else if(midCheck() === null) {
            var random = Math.round(Math.random() * spacesLeft.length);
            
            computerOrder.push(spacesLeft[random]);
            input(spacesLeft[random], playerTwo);
        }
    }
    playerTurn = true;
};

//PLAYERINPUT
var playerInput = function(arg) {
    
    function midCheck() {
        for(var i = 0; i < spacesLeft.length; i++) {
            if(spacesLeft[i] === arg);
            return true;
        }
    }
    if(midCheck()) {
        playerOrder.push(arg);
        input(arg, playerOne);
        computerTurn = true;
    }
    else {
        return false;
    }
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
    gameLive = true;
    computerTurn = true;
    computerPlayer();
};

//GAME RESET
var gameReset = function() {
    for(var i = 0; i < lockout.length; i++) {
        for(var l = 0; l < lockout[i].length; l++) {
            lockout[i][l] = false;
        }
    };
    
    playerTurn = false;
    computerTurn = true;
};

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
    for(var i = 0; i < lockout.length; i++) {
        for(var l = 0; l < lockout[i].length; l++) {
            lockout[i][l] = false;
        }
    };
    
    gameLive = false;
    playerTurn = false;
    computerTurn = false;
    spacesLeft = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
    playerOrder = [];
    computerOrder = [];
    lastTurn = '';
    turnCount = 0;
};

//CURRENT TURN
var currentTurn = function() {
    if(playerTurn) {
        return playerOne;
    }
    else {
        return playerTwo;
    }
};

//JQuery
$(document).ready(function() {
    
    //START BUTTON
    $('.start').click(function() {
        console.log('gamestart');
        gameStart();
        computerDisp();
        firstTurn($('.firstturn').val());
        playerID($('.playerid').val());
    });
    
    
    //RESET
    
    $('.reset').click(function() {
        console.log('reset');
        clearDisp();
        gameReset();
    });
    
    var clearDisp = function() {
        computerTurn = true;
        playerTurn = false;
        var array = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
        
        for(var i = 0; i < array.length; i++) {
            $('#' + array[i] + ' p').text('');
        };
        computerPlayer();
    };
    
    
    //AI DISP
    var computerDisp = function() {
        $('#' + computerOrder[computerOrder.length - 1] + ' p').text(playerTwo);
    };
    
    
//GAMEBODY CLICK
    //S1
    $('#s1').click(function() {
        console.log('s1');
        if(s1 === false && gameLive) {
            $('#s1 p').text(playerOne);
            playerInput('s1');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S2
    $('#s2').click(function() {
        console.log('s2');
        if(s2 === false && gameLive) {
            $('#s2 p').text(playerOne);
            playerInput('s2');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S3
    $('#s3').click(function() {
        console.log('s3');
        if(s3 === false && gameLive) {
            $('#s3 p').text(playerOne);
            playerInput('s3');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S4
    $('#s4').click(function() {
        console.log('s4');
        if(s4 === false && gameLive) {
            $('#s4 p').text(playerOne);
            playerInput('s4');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S5
    $('#s5').click(function() {
        console.log('s5');
        if(s5 === false && gameLive) {
            $('#s5 p').text(playerOne);
            playerInput('s5');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S6
    $('#s6').click(function() {
        console.log('s6');
        if(s6 === false && gameLive) {
            $('#s6 p').text(playerOne);
            playerInput('s6');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S7
    $('#s7').click(function() {
        console.log('s7');
        if(s7 === false && gameLive) {
            $('#s7 p').text(playerOne);
            playerInput('s7');
            computerPlayer();
            computerDisp();
        }
    });
    
    //S8
    $('#s8').click(function() {
        console.log('s8');
        if(s8 === false && gameLive) {
            $('#s8 p').text(playerOne);
            playerInput('s8');
            computerPlayer();
            computerDisp();
        }
    });
    
    $('#s9').click(function() {
        console.log('s9');
        if(s9 === false && gameLive) {
            $('#s9 p').text(playerOne);
            computerPlayer();
            computerDisp();
        }
    });
    
});
