//GAME VARS
var gameLive = false;
var playerTurn = false;
var computerTurn = true;
var spacesLeft = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
var playerOrder = [];
var computerOrder = [];
var turnCount = 0;
var winCount = 0;
var playerOne = 'x';
var playerTwo = 'o';
var twoPlayer = false;

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

var spacesLeftRandom = [s1, s2, s3, s4, s5, s6, s7, s8, s9];


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
    console.log('input');

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

var playerTwoInput = function(arg) {
    if(computerTurn && twoPlayer && arg.vale === false) {
        computerOrder.push(arg);
        input(arg, playerTwo);
        computerTurn = false;
        playerTurn = true;
    }
};


//RESET GAME
var resetGame = function() {
    spacesLeft = [];
    spacesLeftRandom = [];
    for(var i = 0; i < lockout.length; i++) {
        lockout[i].value = false;
        spacesLeft.push(lockout[i].name);
        spacesLeftRandom.push(lockout[i]);
    }
    playerTurn = false;
    computerTurn = false;
    horiz = [[],[],[]];
    vert = [[],[],[]];
    diag = [[],[]];
    playerOrder = [];
    computerOrder = [];
};

//STARTGAME
var startGame = function() {
    gameLive = true;
    computerTurn = true;
    computerPlayer();
};

//WINCHECKER
var winner = '';

var winCheck = function() {
    var winArr = [horiz, vert, diag];
    console.log('wincheck');

    if(playerOne === 'x') {
        for(var i = 0; i < winArr.length; i++) {
            for(str in winArr[i]) {
                if(winArr[i][str].toString() === 'x,x,x') {
                    gameOver();
                    winCount++;
                    winner = 'Player One Wins';
                    return 'Player One Wins';
                    break;
                }
                else if(winArr[i][str].toString() === 'o,o,o') {
                    gameOver();
                    winner = 'Player Two Wins';
                    return 'Player Two Wins';
                    break;
                }
            }
        }
    }
    else if(playerOne === 'o') {
        for(var i = 0; i < winArr.length; i++) {
            for(str in winArr[i]) {
                if(winArr[i][str].toString() === 'o,o,o') {
                    gameOver();
                    winCount++;
                    winner = 'Player One Wins';
                    return 'Player One Wins';
                    break;
                }
                else if(winArr[i][str].toString() === 'x,x,x') {
                    gameOver();
                    winner = 'Player Two Wins';
                    return 'Player Two Wins';
                    break;
                }
            }
        }
    }
    else if(turnCount === 9) {
        gameOver();
        winner = 'The Game is a Tie';
        return 'The Game is a Tie';
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
    console.log('computer player')

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
                        break;
                    }
                    else if(arrCheck[i][str].toString() === 'x,x') {
                        winArr = strCheck[i];
                        winIndex = [str];
                        return true;
                        break;
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
                        break;
                    }
                    else if(arrCheck[i][str].toString() === 'o,o') {
                        winArr = strCheck[i];
                        winIndex = [str];
                        return true;
                        break;
                    }
                }
            }
        }
    return false;
    }

    //TURN ONE
    if(turnCount === 0 && computerTurn && twoPlayer === false) {
        var firstTurnArr = [s1, s3, s7, s9];
        var random = Math.round(Math.random() * 3);
        computerOrder.push(firstTurnArr[random]);
        input(firstTurnArr[random], playerTwo);
    }
    //TURN TWO
    else if(turnCount === 2 && computerTurn && twoPlayer === false) {
        var secTurnArr = [s1, s3, s7, s9];
        var index = secTurnArr.indexOf(computerOrder[0]);
        secTurnArr.splice(index, 1);
        var random = Math.round(Math.random() * 2);
        computerOrder.push(secTurnArr[random]);
        input(secTurnArr[random], playerTwo);
    }
    //TURN THREE++
    else if(turnCount >= 3 && computerTurn && twoPlayer === false) {
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
            var index = Math.round(Math.random() * (spacesLeftRandom.length - 1));
            var randomInput = spacesLeftRandom[index];
            computerOrder.push(randomInput);
            input(randomInput, playerTwo);
        }
    }


    computerTurn = false;
    playerTurn = true;
};

//PLAYER ID
var playerID = function(arg) {
    if(arg = 'x') {
        playerOne = 'x';
        playerTwo = 'o';
    }
    else if(arg = 'o') {
        playerOne = 'o';
        playerTwo = 'x';
    }
};

//SET NUMBER OF PLAYERS
var playerNum = function(arg) {
    if(arg === '1') {
        twoPlayer = false;
    }
    else if(arg === '2') {
        twoPlayer = true;
    }
};

//JQUERY
$(document).ready(function() {

    //DISPLAY

    var clearDisp = function() {
        computerTurn = true;
        playerTurn = false;
        var array = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];

        for(var i = 0; i < array.length; i++) {
            $('#' + array[i] + ' p').text('');
        };
    };
    

    //START BUTTON

    $('.start').click(function() {
        console.log('startgame');
        playerNum($('.players').val());
        playerID($('#playerid').val());
        startGame();
        computerDisp();
        $('#winDisp').addClass('hidden');
    });

    //RESET BUTTON
    $('.reset').click(function() {
        console.log('reset');
        $('#winDisp').addClass('hidden');
        if(gameLive) {
            clearDisp();
            winCount = 0;
            resetGame();
            startGame();
            computerDisp();
        }
        else if(!gameLive) {
            clearDisp();
            resetGame();
            startGame();
            computerDisp();
        }
    });

    
    //AI DISP
    var computerDisp = function() {
        $('#' + computerOrder[computerOrder.length - 1].name + ' p').text(playerTwo);
    };


    //PLAY AGAIN
    $('#playAgain').click(function() {
        if(!gameLive) {
            $('#winDisp').addClass('hidden');
            clearDisp();
            resetGame();
            startGame();
            computerDisp();
            console.log('playAgain');
        }
    });
    
    //BUTTON CLICKS
    //S1
    $('#s1').click(function() {
        if(gameLive && s1.value === false && playerTurn) {
            playerInput(s1);
            $('#s1 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s1.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s1);
            $('#s1 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S2
    $('#s2').click(function() {
        if(gameLive && s2.value === false && playerTurn) {
            playerInput(s2);
            $('#s2 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s2.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s2);
            $('#s2 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S3
    $('#s3').click(function() {
        if(gameLive && s3.value === false && playerTurn) {
            playerInput(s3);
            $('#s3 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s3.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s3);
            $('#s3 p').text(playerTwo);
            if(winCheck() !== undefined) {
                playerTwoInput(s3);
                $('#s3 p').text(playerTwo);
                if(winCheck() !== undefined) {
                    gameOver();
                    $('#win').text(winner);
                    $('#winDisp').removeClass('hidden');
                }
            }
        }
    });

    //S4
    $('#s4').click(function() {
        if(gameLive && s4.value === false && playerTurn) {
            playerInput(s4);
            $('#s4 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden')
            }
        }
        else if(gameLive && s4.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s4);
            $('#s4 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S5
    $('#s5').click(function() {
        if(gameLive && s5.value === false && playerTurn) {
            playerInput(s5);
            $('#s5 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDIsp').removeClass('hidden');
            }
        }
        else if(gameLive && s5.vale === false && twoPlayer && computerTurn) {
            playerTwoInput(s5);
            $('#s5 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S6
    $('#s6').click(function() {
        if(gameLive && s6.value === false && playerTurn) {
            playerInput(s6);
            $('#s6 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s6.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s6);
            $('#s6 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S7
    $('#s7').click(function() {
        if(gameLive && s7.value === false && playerTurn) {
            playerInput(s7);
            $('#s7 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s7.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s7);
            $('#s7 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S8
    $('#s8').click(function() {
        if(gameLive && s8.value === false && playerTurn) {
            playerInput(s8);
            $('#s8 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s8.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s8);
            $('#s8 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });

    //S9
    $('#s9').click(function() {
        if(gameLive && s9.value === false && playerTurn) {
            playerInput(s9);
            $('#s9 p').text(playerOne);
            computerPlayer();
            computerDisp();
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
        else if(gameLive && s9.value === false && twoPlayer && computerTurn) {
            playerTwoInput(s9);
            $('#s9 p').text(playerTwo);
            if(winCheck() !== undefined) {
                gameOver();
                $('#win').text(winner);
                $('#winDisp').removeClass('hidden');
            }
        }
    });
});
