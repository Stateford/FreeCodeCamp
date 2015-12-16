//GAME VARS
var gameLive = false;
var playerTurn = false;
var computerTurn = true;
var spacesLeft = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
var playerOrder = [];
var computerOrder = [];
var lastTurn = '';
var turnCount = 0;
var winCount = 0;
var playerOne = 'x';
var playerTwo = 'o';

//LOCKOUT
var s1 = {
    name: 's1',
    value: false
};
var s2 = {
    name: 's2',
    value: false
};
var s3 = {
    name: 's3',
    value: false
};
var s4 = {
    name: 's4',
    value: false
}
var s5 = {
    name: 's5',
    value: false
};
var s6 = {
    name: 's6',
    value: false
};
var s7 = {
    name: 's7',
    value: false
};
var s8 = {
    name: 's8',
    value: false
};
var s9 = {
    name: 's9',
    value: false
};

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


var input = function(arg, input) {
    spacesLeft.splice(spacesLeft.indexOf(arg), 1);
    turnCount++;
    lastTurn = arg;

    if(arg.name === 's1' && s1.value === false) {
        horiz[0].push(input);
        vert[0].push(input);
        diag[0].push(input);
        s1 = true;
    }
    else if(arg.name === 's2' && s2 === false) {
        horiz[0].push(input);
        vert[1].push(input);
        s2 = true;
    }
    else if(arg.name === 's3' && s3 === false) {
        horiz[0].push(input);
        vert[2].push(input);
        diag[1].push(input);
        s3 = true;
    }
    else if(arg.name === 's4' && s4 === false) {
        horiz[1].push(input);
        vert[0].push(input);
        s4 = true
    }
    else if(arg.name === 's5' && s5 === false) {
        horiz[1].push(input);
        vert[1].push(input);
        diag[0].push(input);
        diag[1].push(input);
        s5 = true;
    }
    else if(arg.name === 's6' && s6 === false) {
        horiz[1].push(input);
        vert[2].push(input);
        s6 = true;
    }
    else if(arg.name === 's7' && s7 === false) {
        horiz[2].push(input);
        vert[0].push(input);
        diag[1].push(input);
        s7 = true;
    }
    else if(arg.name === 's8' && s8 === false) {
        horiz[2].push(input);
        vert[1].push(input);
        s8 = true;
    }
    else if(arg.name === 's9' && s9 === false) {
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

    //VARS TO CHECK WIN OUTPUT
    var winArray = '';
    var winNum = 0;
    var winImp = false;

    //CHECK IF PLAYER ABOUT TO WIN

    /*

    FIX MID CHECK
    REDO
    CURRENTLY BROKEN

    */

    var midCheck = function() {

        if(playerTwo === 'o') {
            for(var i = 0; i < 2; i++) {
                if(horiz[i].toString() === 'o,o') {
                    winArray = 'horiz';
                    winNum = i;
                    winImp = true;
                    return true;
                }
                else if(vert[i].toString() === 'o,o') {
                    winArray = 'vert';
                    winNum = i;
                    winImp = true;
                    return true;
                }
                else if(diag[i].toString() === 'o,o') {
                    winArray = 'diag';
                    winNum = i;
                    winImp = true;
                    return true;
                }
                else if(horiz[i].toString() === 'x,x') {
                    winArray = 'horiz';
                    winNum = i;
                    return true;
                }
                else if(vert[i].toString() === 'x,x') {
                    winArray = 'vert';
                    winNum = i;
                    return true;
                }
                else if(diag[i].toString() === 'x,x') {
                    winArray = 'diag';
                    winNum = i;
                    return true;
                }
            }
        }
        else if(playerTwo === 'x') {
            for(var i = 0; i < 2; i++) {
                if(horiz[i].toString() === 'x,x') {
                    winArray = 'horiz';
                    winNum = i;
                    winImp = true;
                    return true;
                }
                else if(vert[i].toString() === 'x,x') {
                    winArray = 'vert';
                    winNum = i;
                    winImp = true;
                    return true;
                }
                else if(diag[i].toString() === 'x,x') {
                    winArray = 'diag';
                    winNum = i;
                    winImp = true;
                    return true;
                }
                else if(horiz[i].toString === 'o,o') {
                    winArray = 'horiz';
                    winNum = i;
                    return true;
                }
                else if(vert[i].toString() === 'o,o') {
                    winArray = 'vert';
                    winNum = i;
                    return true;
                }
                else if(diag[i].toString() === 'o,o') {
                    winArray = 'diag';
                    winNum = i;
                    return true;
                }
            }
        }
        return false;
    };

//console.log(midCheck());

    //COMPUTER GOES FIRST

    //FIRST TURN
    if(turnCount === 0 && computerTurn) {
        var random = Math.round(Math.random() * 3);
        var randomInput = [s1.name, s3.name, s7.name, s9.name];

        input(randomInput[random], playerTwo);
        computerOrder.push(randomInput[random]);
    }

    //TURN TWO
    else if(turnCount === 2 && computerTurn) {
        if(computerOrder[0].name === 's1') {
            if(s9.value === false) {
            computerOrder.push(s9.name)
            input(s9, playerTwo);
            }
            else if(s3.value === false) {
                computerOrder.push(s3.name);
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
                var random = Math.round(Math.random() * spacesLeft.length - 1);

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
                var random = Math.round(Math.random() * spacesLeft.length - 1);

                computerOrder.push(spacesLeft[random]);
                input(spacesLeft[random], playerTwo);
            }
        }
    }

    //TURN THREE
    else if(turnCount >= 3 && computerTurn) {
        console.log(midCheck());
        if(midCheck() === false) {
            var random = Math.round(Math.random() * spacesLeft.length - 1);

            computerOrder.push(spacesLeft[random]);
            input(spacesLeft[random], playerTwo);
        }
        else if(midCheck()) {
            if(winImp) {
                if(winArray = 'horiz') {
                    for(var i = 0; i < lockout[winNum].length; i++) {
                        if(lockout[winNum][i] === false) {
                            computerOrder.push(spacesLeftHoriz[winNum][i]);
                            input(spacesLeftHoriz[winNum][i], playerTwo);
                        }
                    }
                }
                else if(winArray = 'vert') {
                    for(var i = 0; i < lockoutVert[winNum].length; i++) {
                        if(lockoutVert[winNum][i] === false) {
                            computerOrder.push(spacesLeftVert[winNum][i]);
                            input(spacesLeftVert[winNum][i], playerTwo);
                        }
                    }
                }
                else if(winArray = 'diag') {
                    for(var i = 0; i < lockoutDiag[winNum].length; i++) {
                        if(lockoutDiag[winNum][i] === false) {
                            computerOrder.push(spacesLeftDiag[winNum][i]);
                            input(spacesLeftDiag[winNum][i], playerTwo);
                        }
                    }
                }
            }
            else if(winImp === false) {
                if(winArray = 'horiz') {
                    for(var i = 0; i < lockout[winNum].length; i++) {
                        if(lockout[winNum][i] === false) {
                            computerOrder.push(spacesLeftHoriz[winNum][i]);
                            input(spacesLeftHoriz[winNum][i], playerTwo);
                        }
                    }
                }
                else if(winArray = 'vert') {
                    for(var i = 0; i < lockoutVert[winNum].length; i++) {
                        if(lockoutVert[winNum][i] === false) {
                            computerOrder.push(spacesLeftVert[winNum][i]);
                            input(spacesLeftVert[winNum][i], playerTwo);
                        }
                    }
                }
                else if(winArray = 'diag') {
                    for(var i = 0; i < lockoutDiag[winNum].length; i++) {
                        if(lockoutDiag[winNum][i] === false) {
                            computerOrder.push(spacesLeftDiag[winNum][i]);
                            input(spacesLeftDiag[winNum][i], playerTwo);
                        }
                    }
                }
            }
        }
        else if(midCheck() === false) {
            
        }
    }
    playerTurn = true;
    computerTurn = false;
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

// computerPlayer();
// playerInput(spacesLeft[Math.round(Math.random() * (spacesLeft.length - 1))]);
// computerPlayer();
// playerInput(spacesLeft[Math.round(Math.random() * (spacesLeft.length - 1))]);
// computerPlayer();
// playerInput(spacesLeft[Math.round(Math.random() * (spacesLeft.length - 1))]);
//
// console.log('PLAYERORDER');
// console.log(playerOrder);
// console.log('COMPUTERORDER');
// console.log(computerOrder);
// console.log('SPACESLEFT');
// console.log(spacesLeft);
// console.log(s1.name);



