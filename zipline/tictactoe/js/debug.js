$(document).ready(function() {
    var player1 = true;
    var turncount = 0;
    var gameplay = false;
    
    var playerOneWin = false;
    var playerTwoWin = false;
    
    
    var twoPlayers = true;

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
    
    var lockout = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
    
    //WIN CONDITIONS
    var horiz1 = '';
    var horiz2 = '';
    var horiz3 = '';
    var vert1 = '';
    var vert2 = '';
    var vert3 = '';
    var diag1 = '';
    var diag2 = '';
    
    var wincond = [horiz1, horiz2, horiz3, vert1, vert2, vert3, diag1, diag2];
    
    
    //WIN CHECKER
    var wincheck = function(arr) {
        for(var i = 0; i < wincond.length; i++) {
            if(wincond[i] === 'xxx') {
                return true;
            }
            else if(wincond[i] === 'ooo') {
                return true;
            }
        }
        return false;
    };
    
    
    //AI
    var spacesleft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    
    //GAMESTART
//    $('#start').click(function() {
//        
//        //reset everything
//        playerCheck(getPlayerNum);
//        gameplay = true;
//        turncount = 0;
//        
//        //set lockout to false to start game
//        for (var x = 0; x < lockout.length; x++) {
//            lockout[x] = false;
//        }
//        
//        //reset wincond
//        for(var i = 0; i < wincond.length; i++) {
//            wincond[i] = '';
//        }
//        
//        var spacesleft = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//    })
    
    
    //GRID POSITION
    ///////////
    // 1 2 3 //
    // 4 5 6 //
    // 7 8 9 //
    ///////////
    
    
    //TWO PLAYER GAME
        
    if(twoPlayers) {


        //POS 1
        $('#s1').click(function() {

            //PLAYER 1
            if(player1 && s1 === false) {
                $('#s1 p').text('X');
                horiz1 + 'x';
                vert1 + 'x';
                diag1 + 'x';
                player1 = false;
                turncount++;
                s1 = true;
                
                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
                else {
                    twoPlayers = true;
                }
            }

            //PLAYER 2
            else if (player1 === false && s1 === false) {
                $('#s1 p').text('O');
                horiz1 + 'o';
                vert1 + 'o';
                diag1 + 'o';
                player1 = true;
                turncount++;
                s1 = true;
                
                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })    

        //POS 2
        $('#s2').click(function() {

            //PLAYER 1
            if(player1 && s2 === false) {
                $('#s2 p').text('X');
                horiz1 + 'x';
                vert2 + 'x';
                player1 = false;
                turncount++;
                s2 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }

            //PLAYER 2
            else if (player1 === false && s2 === false) {
                $('#s2 p').text('O');
                horiz1 + 'o';
                vert2 + 'o';
                player1 = true;
                turncount++;
                s2 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })    

        //POS 3
        $('#s3').click(function() {

            //PLAYER 1
            if(player1 && s3 === false) {
                $('#s3 p').text('X');
                horiz1 + 'x';
                vert3 + 'x';
                diag2 + 'x';
                player1 = false;
                turncount++;
                s3 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }

            //PLAYER 2
            else if (player1 === false && s3 === false) {
                $('#s2 p').text('O');
                horiz1 + 'o';
                vert3 + 'o';
                diag2 + 'o';
                player1 = true;
                turncount++;
                s3 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })


        //POS 4
        $('#s4').click(function() {

            //PLAYER 1
            if(player1 && s4 === false) {
                $('#s4 p').text('X');
                horiz2 + 'x';
                vert1 + 'x';
                player1 = false;
                turncount++;
                s4 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                };
            }

            //PLAYER 2
            else if (player1 === false && s4 === false) {
                $('#s4 p').text('O');
                horiz2 + 'o';
                vert1 + 'o';
                player1 = true;
                turncount++;
                s4 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })

        //POS 5
        $('#s5').click(function() {

            //PLAYER 1
            if(player1 && s5 === false) {
                $('#s5 p').text('X');
                horiz2 + 'x';
                vert2 + 'x';
                diag1 + 'x';
                diag2 + 'x';
                player1 = false;
                turncount++;
                s5 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }

            //PLAYER 2
            else if(player1 === false && s5 === false) {
                $('#s5 p').text('O');
                horiz2 + 'o';
                vert2 + 'o';
                diag1 + 'o';
                diag2 + 'o';
                player1 = true;
                turncount++;
                s5 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })

        //POS 6
        $('#s6').click(function() {

            //PLAYER 1
            if(player1 && s6 === false) {
                $('#s6 p').text('X');
                horiz2 + 'x';
                vert3 + 'x';
                player1 = false;
                turncount++;
                s6 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }

            //PLAYER 2
            else if(player1 === false && s6 === false) {
                $('#s6 p').text('O');
                horiz2 + 'o';
                vert3 + 'o';
                player1 = true;
                turncount++;
                s6 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })

        //POS 7
        $('#s7').click(function() {

            //PLAYER 1
            if(player1 && s7 === false) {
                $('#s7 p').text('X');
                horiz3 + 'x';
                vert1 + 'x';
                diag2 + 'x';
                player1 = false;
                turncount++;
                s7 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }

            //PLAYER 2
            if(player1 === false && s7 === false) {
                $('#s7 p').text('O');
                horiz3 + 'o';
                vert1 + 'o';
                diag2 + 'o';
                player1 = true;
                turncount++;
                s7 = true;

                if(winchek(wincond)) {
                    twoPlayers = false;
                }
            }
        });

        //POS 8
        $('#s8').click(function() {

            //PLAYER 1
            if(player1 && s8 === false) {
                $('#s8 p').text('X');
                horiz3 + 'x';
                vert2 +'x';
                turncount++;
                player1 = false;
                s8 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
            //PLAYER 2
            else if(player1 === false && s8 === false) {
                $('#s8 p').text('O');
                horiz3 + 'o';
                vert2 +'o';
                turncount++;
                player1 = true;
                s8 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })

        //POS 9
        $('#s9').click(function() {

            //PLAYER 1
            if(player1 && s9 === false) {
                $('#s9 p').text('X');
                horiz3 + 'x';
                vert3 + 'x';
                diag1 + 'x';
                turncount++;
                player1 = false;
                s9 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }

            //PLAYER 2
            else if (player1 === false && s9 === false) {
                $('#s9 p').text('O');
                horiz3 + 'o';
                vert3 + 'o';
                diag1 + 'o';
                turncount++;
                player1 = true;
                s9 = true;

                if(wincheck(wincond)) {
                    twoPlayers = false;
                }
            }
        })

    } //END TWO PLAYER
    else {
        $('#win').text('gamefinish')
    }
}); //END DOCUMENT READY