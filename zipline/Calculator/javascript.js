
//keypad

$(document).ready(function() {
    var total = 0;
    var a = '';
    var b = '';
    var runs = 0;
    var firstnum = 0;
    var secondnum = 0;
    var decnum = 0;
    
//SIGNIFICANT DIGITS
    
    $('#zero').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '0';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '0';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });

    
    $('#one').click(function(){
        if(runs === 0 && a.length < 10){
            a += '1';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '1';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#two').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '2';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '2';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#three').click(function(){
        if(runs === 0 && a.length < 10) {
            a += '3';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '3';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#four').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '4';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '4';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#five').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '5';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '5';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#six').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '6';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '6';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#seven').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '7';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '7';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#eight').click(function(){
        if(runs === 0 && a.length < 10) {
            a += '8';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '8';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });


    $('#nine').click(function() {
        if(runs === 0 && a.length < 10) {
            a += '9';
            a = parseFloat(a);
            a = a.toString();
            $('#output').text(a);
        }
        else if(runs !== 0) {
            b += '9';
            b = parseFloat(b);
            b = b.toString();
            $('#output').text(b);
        }
    });

    
    $('#dec').click(function() {
        if(decnum === 0 && runs === 0) {
            a += '.';
            decnum = 1;
            $('#output').text(a);
        }
        else if(decnum === 0 && runs !== 0) {
            b += '.';
            decnum = 1;
            $('#output').text(b);
        }
    })


    $('#AC').click(function() {
        total = 0;
        a = '';
        b = '';
        runs = 0;
        firstnum = 0;
        secondnum = 0;
        decnum = 0;
        $('#output').text('0');
    });
    

    $('#CE').click(function() {
        if(runs === 0) {
            total = 0;
            a = '';
            b = '';
            runs = 0;
            firstnum = 0;
            secondnum = 0;
            decnum = 0;
            $('#output').text('0');
        }
        else if(runs === 1) {
            b = ''
            secondnum = 0;
            decnum = 0;
            $('#output').text('0');
        }
    })
    
    
    $('#enter').click(function() {
        if(runs === 0) {
            runs = 1;
            decnum = 0;
            firstnum = parseFloat($('#output').text());
        }
        if(runs > 0) {
            decnum = 0;
            b = ''
            firstnum = parseFloat($('#output').text());
        }
    });
    
    $('#plus').click(function() {
        if(runs === 1) {
            secondnum = parseFloat($('#output').text());
            total = firstnum + secondnum;
            total = +total.toFixed(8);
            total = total.toString();
            $('#output').text(total);
        }
        else {
            $('#output').text('ERROR');
        }
    })
    
    $('#minus').click(function() {
        if(runs === 1) {    
            secondnum = parseFloat($('#output').text());
            total = firstnum - secondnum;
            total = +total.toFixed(8);
            total = total.toString();
            $('#output').text(total);
        }
        else {
            $('#output').text('ERROR');
        }
    })
    
    $('#multiply').click(function() {
        if(runs === 1) {
            secondnum = parseFloat($('#output').text());
            total = firstnum * secondnum;
            total = +total.toFixed(8);
            total = total.toString();
            $('#output').text(total);
        }
        else {
            $('#output').text('ERROR');
        }
    })
    
    $('#divide').click(function() {
        if(runs === 1) {
            secondnum = parseFloat($('#output').text());
            total = firstnum / secondnum;
            total = +total.toFixed(8);
            total = total.toString();
            $('#output').text(total);
            }
        else {
            $('#output').text('ERROR');
        }
    })
    
});




