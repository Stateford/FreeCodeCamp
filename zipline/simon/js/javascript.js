var turncount = 0;
var playerturn = false;
var simon = [];
var playerinput = [];
var hardcore = false;

var red = 1;
var blue = 2;
var yellow = 3;
var green = 4;
var random = Math.round(Math.random() * (4-1) + 1);

$(document).ready(function() {
    
    while(playerturn === false) {
            var simonturn = simon.push(random);
            
            for(var i = 0; i < simon.length; i++) {
                if(simonturn === 1) {
                    $('#red').css( {'background-color:', "red" });
                    $('#red').css ( {'background-color:', 'red'});
                } 
            }
        
            
        playerturn = true;
        };
    
    $('#red').click(function() {
        playerinput.push(1);
        if(simon.join() === playerinput.join()) {
            playerturn === false;
            turncount++;
        }
        else if (hardcore) {
            turncount = 0;
            simon = [];
            playerinput = [];
        }
        else {
            
        }
    });
    
    $('#blue').click(function() {
        playerinput.push(2);
        for(var i = 0; i < simon.legnth; i++) {
            if(simon.join() === playerinput.join()) {
                playerturn === false;
                turncount++
            }
            else if (hardcore) {
                turncount = 0;
                simon = [];
                playerinput = [];
            }
            else {
                
            }
        }
    });
        
    $('#yellow').click(function() {
        playerinput.push(3);
        for(var i = 0; i < simon.length; i++) {
            if(simon.join() === playerinput.join()) {
                playerturn === false;
                turncount++
            }
            else if (hardcore) {
                turncount = 0;
                simon = [];
                playerinput = [];
            }
            else {
                
            }
        }
    });
        
    $('#green').click(function() {
        playerinput.push(4);
        for(var i = 0; i < simon.length; i++) {
            if(simon.join() === playerinput.join()) {
                playerturn === false;
                turncount++
            }
            else if (hardcore) {
                turncount = 0;
                simon = [];
                playerinput = [];
            }
            else {
                
            }
        }
    })
    
    
});