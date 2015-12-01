$(document).ready(function() {
    var player1 = true;
    var turncount = 0;
    
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
    
    //WIN CONDITIONS
    var horiz1 = '';
    var horiz2 = '';
    var horiz3 = '';
    var vert1 = '';
    var vert2 = '';
    var vert3 = '';
    var diag1 = '';
    var diag2 = '';
    
    
    
    
    $('#s1').click(function() {
        if(player1 && s1 === false) {
            $('#s1 p').text('X');
            horiz1 + 'x';
            vert1 + 'x';
            diag1 + 'x';
            player1 = false;
            turncount++;
            s1 = true;
        }
        else if (player1 === false && s1 === false) {
            $('#s1 p').text('O');
            horiz1 + 'o';
            vert1 + 'o';
            diag1 + 'o';
            player1 = true;
            turncount++;
            s1 = true;
        }
    })    
    
    $('#s2').click(function() {
        if(player1 && s2 === false) {
            $('#s2 p').text('X');
            horiz1 + 'x';
            vert2 + 'x';
            player1 = false;
            turncount++;
            s2 = true;
        }
        else if (player1 === false && s2 === false) {
            $('#s2 p').text('O');
            horiz1 + 'o';
            vert2 + 'o';
            player1 = true;
            turncount++;
            s2 = true;
        }
    })    
    
    $('#s3').click(function() {
        if(player1 && s3 === false) {
            $('#s3 p').text('X');
            horiz1 + 'x';
            vert3 + 'x';
            diag2 + 'x';
            player1 = false;
            turncount++;
            s3 = true;
        }
        else if (player1 === false && s2 === false) {
            $('#s2 p').text('O');
            horiz1 + 'o';
            vert3 + 'o';
            diag2 + 'o';
            player1 = true;
            turncount++;
            s3 = true;
        }
    })


});