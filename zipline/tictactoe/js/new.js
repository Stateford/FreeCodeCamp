//GAME VARS
var gameLive = false;
var playerTurn = false;
var computerTurn = true;
var spacesLeft = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
var spacesLeftRandom = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
var playerOrder = [];
var computerOrder = [];
var turnCount = 0;
var winCount = 0;
var playerOne = 'x';
var playerTwo = 'o'; 

//OBJECTS
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


//LOCKOUT
var lockout = [s1, s2, s3, s4, s4, s5, s6, s7, s8, s9];

var lockoutHoriz = [
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

// INPUT

var input = function(arg1, arg2) {
    var index = spacesLeft.indexOf(arg1.name);
    spacesLeft.splice(index, 1);
    
    var index2 = spacesLeftRandom.indexOf(arg1);
    spacesLeftRandom.splice(index2, 1);
    
    if(arg1.name === 's1' && arg1.value === false) {
        horiz[0].push(arg2);
        vert[0].push(arg2);
        diag[0].push(arg2);
    }
    else if(arg1.name === 's2' && arg1.value === false) {
        horiz[0].push(arg2);
        vert[1].push(arg2);
    }
    else if(arg1.name === 's3' && arg1.value === false) {
        horiz[0].push(arg2);
        vert[2].push(arg2);
        diag[1].push(arg2);
    }
    else if(arg1.name === 's4' && arg1.value === false) {
        horiz[1].push(arg2);
        vert[0].push(arg2);
    }
    else if(arg1.name === 's5' && arg1.value === false) {
        horiz[1].push(arg2);
        vert[1].push(arg2);
        diag[0].push(arg2);
        diag[1].push(arg2);
    }
    else if(arg1.name === 's6' && arg1.value === false) {
        horiz[1].push(arg2);
        vert[2].push(arg2);
    }
    else if(arg1.name === 's7' && arg1.value === false) {
        horiz[2].push(arg2);
        vert[0].push(arg2);
        diag[1].push(arg2);
    }
    else if(arg1.name === 's8' && arg1.value === false) {
        horiz[2].push(arg2);
        vert[1].push(arg2);
    }
    else if(arg1.name === 's9' && arg1.value === false) {
        horiz[2].push(arg2);
        vert[2].push(arg2);
        diag[0].push(arg2);
    }
    arg1.value = true;
    turnCount++;
};

//PLAYER INPUT
var playerInput = function(arg) {
    if(playerTurn && arg.value === false) {
        playerOrder.push(arg);
        input(arg, playerOne);
        playerTurn = false;
        computerTurn = true;
    }
};

//STARTGAME
var startGame = function() {
    gameLive = true;
    computerTurn = true;
    computerPlayer();
};

//RESET GAME
var resetGame = function() {
    for(var i = 0; i < lockout.length; i++) {
        lockout[i].value = false;
    }
    playerTurn = false;
    computerTurn = false;
    horiz = [[],[],[]];
    vert = [[],[],[]];
    diag = [[],[]];
    playerOrder = [];
    computerOrder = [];
    gameStart();
};

//WINCHECKER
var winCheck = function() {
    var winArr = [horiz, vert, diag];
    
    if(playerOne === 'x') {
        for(var i = 0; i < winArr.length; i++) {
            for(str in winArr[i]) {
                if(winArr[i][str].toString() === 'x,x,x') {
                    return 'playerOneWin';
                }
                else if(winArr[i][str].toString() === 'o,o,o') {
                    return 'playerTwoWin';
                }
            }
        }
    }
    if(playerOne === 'o') {
        for(var i = 0; i < winArr.length; i++) {
            for(str in winArr[i]) {
                if(winArr[i][str].toString() === 'o,o,o') {
                    return 'playerOneWin';
                }
                else if(winArr[i][str].toString() === 'x,x,x') {
                    return 'playerTwoWin';
                }
            }
        }
    }
};

//GAMEOVER
var gameOver = function() {
    gameLive = false;
    playerTurn = false;
    computerTurn = false;
    horiz = [[],[],[]];
    vert = [[],[],[]];
    diag = [[],[]];
    playerOrder = [];
    computerOrder = [];
    turnCount = 0;
};

//AI
var computerPlayer = function() {
    spacesLeft.sort();
    computerOrder.sort();
    playerOrder.sort();
    
    var winArr = '';
    var winIndex = 0;
    var winImp = false;
    
    //CHECK FOR NEXT TURN WIN CONDITIONS
    var midCheck = function() {
        var arrCheck = [horiz, vert, diag];
        var strCheck = ['horiz', 'vert', 'diag'];
        
        if(playerTwo === 'o') {
            for(var i = 0; i < arrCheck.length; i++) {
                for(str in arrCheck[i]) {
                    if(arrCheck[i][str].toString() === 'o,o') {
                        winArr = strCheck[i];
                        winIndex = [str];
                        winImp = true;
                        return true;
                    }
                    else if(arrCheck[i][str].toString() === 'x,x') {
                        winArr = strCheck[i];
                        winIndex = [str];
                        return true;
                    }
                }
            }
        }
        else if(playerTwo === 'x') {
            for(var i = 0; i < arrCheck.length; i++) {
                for(str in arrCheck[i]) {
                    if(arrCheck[i][str].toString() === 'x,x') {
                        winArr = strCheck[i];
                        winIndex = [str];
                        winImp = true;
                        return true;
                    }
                    else if(arrCheck[i][str].toString() === 'o,o') {
                        winArr = strCheck[i];
                        winIndex = [str];
                        return true;
                    }
                }
            }
        }
    return false;
    }
    
    //TURN ONE
    if(turnCount === 0 && computerTurn) {
        var firstTurnArr = [s1, s3, s7, s9];
        var random = Math.round(Math.random() * 3);
        
        computerOrder.push(firstTurnArr[random]);
        input(firstTurnArr[random], playerTwo);
    }
    else if(turnCount === 2 && computerTurn) {
        var secTurnArr = [s1, s3, s7, s9];
        var index = secTurnArr.indexOf(computerOrder[0]);
        secTurnArr.splice(index, 1);
        var random = Math.round(Math.random() * 2);
        computerOrder.push(secTurnArr[random]);
        input(secTurnArr[random], playerTwo);
    }
    else if(turnCount >= 3 && computerTurn) {
        if(midCheck() === true) {
            if(winArr === 'horiz') {
                for(var i = 0; i < lockoutHoriz[winIndex].length; i++) {
                    if(lockoutHoriz[winIndex][i].value === false) {
                        computerOrder.push(lockoutHoriz[winIndex][i]);
                        input(lockoutHoriz[winIndex][i], playerTwo);
                    }
                }
            }
            else if(winArr === 'vert') {
                for(var i = 0; i < lockoutVert[winIndex].length; i++) {
                    if(lockoutVert[winIndex][i].value === false) {
                        computerOrder.push(lockoutVert[winIndex][i]);
                        input(lockoutVert[winIndex][i], playerTwo);
                    }
                }
            }
            else if(winArr = 'diag') {
                for(var i = 0; i < lockoutDiag[winIndex].length; i++) {
                    if(lockoutDiag[winIndex][i].value === false) {
                        computerOrder.push(lockoutDiag[winIndex][i]);
                        input(lockoutDiag[winIndex][i], playerTwo);
                    }
                }
            }
        }
        else if(midCheck() === false) {
            
        }
    }
    
    
    computerTurn = false;
    playerTurn = true;
    console.log(midCheck());
};


//DEBUG
s1.value = true;
s2.value = true;
horiz = [['x','x'],[],[]];
computerTurn = true;
turnCount = 3;
computerPlayer();

console.log(horiz);

