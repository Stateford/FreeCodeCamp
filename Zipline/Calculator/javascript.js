var total = 0;
var a = 0;
var b = 0;


var display = $('#led').text();

// functions

var add = function(a, b) {
    total = a + b;
}

var sub = function(a, b) {
    total = a - b;
}

var mult = function(a, b) {
    total = a * b;
}

var divi = function(a, b) {
    total = a / b;
}



//BUTTON PRESSES
//
//ONE



$('#zero').click(function() {
    a = 0;
})

$('#one').click(function() {
    a = 1;
})



$('#two').click(function() {
    a = 2;
})



$('#three').click(function(){
    a = 3;
})



$('#four').click(function(){
    a = 4;
})



$('#five').click(function() {
    a = 5;
})


$('#six').click(function(){
    a = 6;
})


$('#seven').click(function() {
    a = 7;
})


$('#eight').click(function() {
    a = 8;
})


$('#nine').click(function() {
    a = 9
})

$('#ac').click(function() {
    a = 0;
    b = 0;
    total = 0;
})



