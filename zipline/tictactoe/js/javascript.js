$(document).ready(function() {
    var player1turn = true,
        horiz1 = [],
        horiz2 = [],
        horiz3 = [],
        vert1 = [],
        vert2 = [],
        vert3 = [],
        diag1 = [],
        diag3 = [];
    
    $('#s1').click(function() {
        if(player1turn) {
            $(this).text('x');
            horiz1.push('x');
            vert1.push('x');
            diag1.push('x');
            player1turn === false;
        }
        else {
            $(this).text('o');
            horiz1.push('o');
            vert1.push('o');
            diag1.push('o');
            player1turn === true;
        };
        
    })
});