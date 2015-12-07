$(document).ready(function() {

    //GAME
    var playerTurn = false;
    var simonTurn = false;
    var gameLive = false;
    var colors = ["red", "yellow", "blue", "green"];
    var turnCount = 0;
    var hardcore = true;


    //DETERMINE RANDOM COLOR
    var randomColor = function() {
        var random = Math.round(Math.random() * 3);
        return colors[random];
    };

    //SIMON GLOBAL
    var simonOrder = [];


    //PLAYER
    var playerOrder = [];

    var playerInput = function(color) {
        playerOrder.push(color);
    }



    //IS EQUAL
    // Warn if overriding existing method
    if(Array.prototype.equals)
        console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
    // attach the .equals method to Array's prototype to call it on any array
    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;

        // compare lengths - can save a lot of time 
        if (this.length != array.length)
            return false;

        for (var i = 0, l=this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;       
            }           
            else if (this[i] != array[i]) { 
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;   
            }           
        }       
        return true;
    }
    // Hide method from for-in loops
    Object.defineProperty(Array.prototype, "equals", {enumerable: false});

    //CHECK
    var orderCheck = function() {
        if(simonOrder.equals(playerOrder)) {
            return true;
        }
        else {
            return false;
        }
    }


    
    //SIMON AI
    var simonDisp = function() {
        for(var i = 0; i < simonOrder.length; i++) {
            switch(simonOrder[i]) {

                case "red":
                    $('#red').addClass('hidden').delay(1000).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    })
                    break;

                case "yellow":
                    $('#yellow').addClass('hidden').delay(1000).queue(function() {
                        $(this). removeClass('hidden').dequeue();
                    })
                    break;


                case "blue":
                    $('#blue').addClass('hidden').delay(1000).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    break;

                case "green":
                    $('#green').addClass('hidden').delay(1000).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    })
                    break;
            }
        }
    }

    var simonSays = function() {
        while(simonTurn) {
            simonOrder.push(randomColor());

            //DISPLAY SIMONORDER
            simonDisp();

            //END OF TURN
            turnCount++;
            playerTurn = true;
            simonTurn = false;
        }
    };
    
    
    //START GAME
    var startGame = function() {
        if (gameLive === false) {
            turnCount = 0;
            playerTurn = false;
            simonOrder = [];
            simonTurn = true;
            gameLive = true;
            simonSays();
        }
    };

    //RESET GAME
    var resetGame = function() {
        turnCount = 0;
        playerTurn = false;
        simonTurn = true;
        simonOrder = [];
        playerOrder = [];
        simonSays();
    };
       
    //GAMEOVER
    var gameOver = function() {

        //HARDCORE
        if(hardcore) {
            gameLive = false;
            simonTurn = false;
            turnCount = 0;
            playerTurn = false;
            simonOrder = [];
            playerOrder = [];
        }

        //CASUAL
        else if(hardcore === false) {
            simonDisp();
        }
    };
    
        //START GAME
    $('#start').click(startGame());
    
    //RESTART
    $('#reset').click(resetGame());
    
    //HARDCORE TOGGLE
    $('#hardcore').click(function() {
        if(hardcore && gameLive === false) {
            $('#hardcoredisp').text('Casual');
            hardcore = false;
        }
        else if (hardcore === false && gameLive === false) {
            $('#hardcoredisp').text('Hardcore');
            hardcore = true;
        }
    });
    
    
    //RED CLICK
    $('#red').click(function() {
        if(playerTurn && orderCheck()) {
            playerInput("red");
            simonSays();
        }
        else {
            gameOver();
        }
    });

    //YELLOW CLICK
    $('#yellow').click(function() {
        if(orderCheck()) {
            playerInput('yellow');
            simonSays();
        }
        else {
            gameOver();
        }
    });

    //BLUE CLICK
    $('#blue').click(function() {
        if(orderCheck()) {
            playerInput('blue');
            simonSays();
        }
        else {
            gameOver();
        }
    });


    //GREEN CLICK
    $('#green').click(function() {
        if(orderCheck()) {
            playerInput('green');
            simonSays();
        }
        else {
            gameOver();
        }
    });
}); //DOCUMENT READY END