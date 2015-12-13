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
        else {
            return 'idiet';
        }
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
    else if(turnCount >= 3 && computerTurn) {
        if(midCheck() !== 'idiet') {

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
        else if(midCheck() === 'idiet') {
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

computerPlayer();
playerInput(spacesLeft[Math.round(Math.random() * spacesLeft.length)]);
computerPlayer();
playerInput(spacesLeft[Math.round(Math.random() * spacesLeft.length)]);
computerPlayer();

console.log('PLAYERORDER');
console.log(playerOrder);
console.log('COMPUTERORDER');
console.log(computerOrder);
console.log('SPACESLEFT');
console.log(spacesLeft);
