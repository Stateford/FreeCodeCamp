
//keypad

$(document).ready(function() {
    var total = 0;
    var a = '';
    var b = '';
    var runs = 0;
    var firstnum = 0;
    var secondnum = 0;
    
    
//SIGNIFICANT DIGITS
    
    $('#zero').click(function() {
        if(runs === 0) {
            a += '0';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });



    $('#one').click(function(){
        if(runs === 0){
            a += '1';
            if(a.length <= 8) {
                $('#output').text(a);
            }
        }
    });




    $('#two').click(function() {
        if(runs === 0) {
            a += '2';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });




    $('#three').click(function(){
        if(runs === 0) {
            a += '3';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });




    $('#four').click(function() {
        if(runs === 0) {
            a += '4';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });




    $('#five').click(function() {
        if(runs === 0) {
            a += '5';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });




    $('#six').click(function() {
        if(runs === 0) {
            a += '6';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });



    $('#seven').click(function() {
        if(runs === 0) {
            a += '7';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });



    $('#eight').click(function(){
        if(runs === 0) {
            a += '8';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });



    $('#nine').click(function() {
        if(runs === 0) {
            a += '9';
            if(a.length <= 8){
                $('#output').text(a);
            }
        }
    });



    $('#AC').click(function() {
        total = 0;
        a = '';
        b = '';
        runs = 0;
        firstnum = 0;
        secondnum = 0;
        $('#output').text('0');
    });
    
    

    $('#CE').click(function() {
        b = ''
        secondnum = 0;
        $('#output').text(a);
    })



    $('#enter').click(function() {
        if(runs === 0) {
            runs = 1;
            firstnum = parseInt($('#output').text())
            $('#DEBUGGER').text(firstnum)
        }
    });
});









