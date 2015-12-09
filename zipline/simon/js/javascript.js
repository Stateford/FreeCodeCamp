$(document).ready(function() {

    //GAME
    var playerTurn = false;
    var simonTurn = false;
    var gameLive = false;
    var colors = ["red", "yellow", "blue", "green"];
    var turnCount = 0;
    var inputNum = 0;
    var hardcore = true;


    //SIMON GLOBAL
    var simonOrder = [];


    //PLAYER
    var playerOrder = [];

    var playerInput = function(color) {
        playerOrder.push(color);
        playerTurn = false;
        simonTurn = true;
    }


    //IS EQUAL
    //THIRD-PARTY API
    
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
    
    //DETERMINE RANDOM COLOR
    var randomColor = function() {
        var random = Math.round(Math.random() * 3);
        return colors[random];
    };
    
    
    var simonSays = function() {
        while(simonTurn) {
            simonOrder.push(randomColor());

            //DISPLAY SIMONORDER
            simonDisp();

            //END OF TURN
            playerTurn = true;
            simonTurn = false;
        }
    };
    

    var simonDisp = function() {
        var i = 0;
        
        function disp() {
            if(i < simonOrder.length) {
                if(simonOrder[i] === "red") {
                    $('#red').addClass('hidden').delay(500).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    setTimeout(disp, 700);
                }
                else if(simonOrder[i] === "yellow") {
                    $('#yellow').addClass('hidden').delay(500).queue(function() {
                        $(this). removeClass('hidden').dequeue();
                    });
                    setTimeout(disp, 700);
                }
                else if(simonOrder[i] === "blue") {
                    $('#blue').addClass('hidden').delay(500).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    setTimeout(disp, 700);
                }
                else if(simonOrder[i] === "green") {
                    $('#green').addClass('hidden').delay(500).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    setTimeout(disp, 700);
                }
                i++;
            }
        }
        disp();
    };

    
    
    //START GAME
    var startGame = function() {
        if (gameLive === false) {
            turnCount = 1;
            turnCountDisp();
            playerTurn = false;
            simonOrder = [];
            playerOrder = [];
            simonTurn = true;
            gameLive = true;
            simonSays();
        }
    };

    //RESET GAME
    var resetGame = function() {
        turnCount = 1;
        turnCountDisp();
        playerTurn = false;
        simonTurn = true;
        simonOrder = [];
        playerOrder = [];
        simonSays();
    };
       

    
        //START GAME
    $('#start').click(function() {
        startGame();
    });
    
    //RESTART
    $('#reset').click(function() {
        resetGame();
    });
    
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
            playerOrder = [];
            simonDisp();
        }
    };
    
    //TURNCOUNT
    var turnCountDisp = function() {
        $("#turncount").text(turnCount.toString());
    };
    
    //RED CLICK
    $('#red').click(function() {
        playerInput("red");
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                simonSays();
            }
            else {
                gameOver();
            }
        }
        else if(turnCount < playerOrder.length) {
            gameOver();
        }
    });

    //YELLOW CLICK
    $('#yellow').click(function() {
        playerInput("yellow");
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                simonSays();
            }
            else {
                gameOver();
            }
        }
        else if(turnCount < playerOrder.length){
            gameOver();
        }
    });

    //BLUE CLICK
    $('#blue').click(function() {
        playerInput("blue");
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                simonSays();
            }
            else {
                gameOver();
            }
        }
        else if(turnCount < playerOrder.length) {
            gameOver();
        }
    });


    //GREEN CLICK
    $('#green').click(function() {
        playerInput("green");
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                simonSays();
            }
            else {
                gameOver();
            }
        }
        else if(turnCount < playerOrder.length) {
            gameOver();
        }
    });
    
    
    //DEBUG PURPOSES
    var debug = function() {
        for(var x = 0; x < simonOrder.length; x++) {
            var currentText = $('#simonorder').text();
            
            var currentArr = simonOrder[x];
            $('#simonorder').text(currentText + " " + currentArr);
        }
        
        for(var i = 0; i < playerOrder.length; i++) {
            var currentText = $('#playerorder').text();
            
            var currentArr = playerOrder[i];
            $('#playerorder').text(currentText + " " + currentArr);
        }
        if(orderCheck()) {
            $('#ordercheck').text('true');
        }
        else if(orderCheck() === false) {
            $('#ordercheck').text('false');
        }
    };
    
    $('#debug').click(function() {
        debug();
    })
    
}); //DOCUMENT READY END