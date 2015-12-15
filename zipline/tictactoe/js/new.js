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

// INPUT

var input = 

