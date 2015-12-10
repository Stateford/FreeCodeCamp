$(document).ready(function() {

//GAME
    var playerTurn = false;
    var simonTurn = false;
    var gameLive = false;
    var colors = ["red", "yellow", "blue", "green"];
    var turnCount = 0;
    var hardcore = true;
    var winCount = 0;
    var clickCount = 0;


//SIMON GLOBAL
    var simonOrder = [];


//PLAYER
    var playerOrder = [];

    var playerInput = function(color) {
        clickCount++;
        playerOrder.push(color);
        playerTurn = false;
        simonTurn = true;
    };


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

//AUDIO    
    var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    
    
    
//SIMON AI
    
    //DETERMINE RANDOM COLOR
    var randomColor = function() {
        var random = Math.round(Math.random() * 3);
        return colors[random];
    };
    
    //SIMONSAYS
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
    
    //SIMONDISPLAY
    var simonDisp = function() {
        var i = 0;
        
        function disp() {
            if(i < simonOrder.length) {
                if(simonOrder[i] === "red") {
                    $('#red').addClass('hidden').delay(500).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    redAudio.play();
                    setTimeout(disp, 700);
                }
                else if(simonOrder[i] === "yellow") {
                    $('#yellow').addClass('hidden').delay(500).queue(function() {
                        $(this). removeClass('hidden').dequeue();
                    });
                    yellowAudio.play();
                    setTimeout(disp, 700);
                }
                else if(simonOrder[i] === "blue") {
                    $('#blue').addClass('hidden').delay(500).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    blueAudio.play();
                    setTimeout(disp, 700);
                }
                else if(simonOrder[i] === "green") {
                    $('#green').addClass('hidden').delay(500).queue(function() {
                        $(this).removeClass('hidden').dequeue();
                    });
                    greenAudio.play();
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
            clickCount = 0;
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
        clickCount = 0;
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
            clickCount = 0;
            gameLive = false;
            simonTurn = false;
            turnCount = 0;
            playerTurn = false;
            simonOrder = [];
            playerOrder = [];
        }

        //CASUAL
        else if(hardcore === false) {
            clickCount = 0;
            playerOrder = [];
            simonDisp();
        }
    };
    
//GAME WIN
    var gameWin = function() {
        if(turnCount === 20) {
            gameLive = false;
            simonTurn = false;
            turnCount = 0;
            playerTurn = false;
            simonOrder = [];
            playerOrder = [];
            
            $('#gamewin').removeClass('hidden');
        }
    };
    
//CORRECT NOTIFICATION
    var correctInput = function() {
        var i = 0;
        
        function correct() {
            if(i < 2) {
                $('#red').addClass('hidden').delay(500).queue(function() {
                    $(this).removeClass('hidden').dequeue();
                });

                $('#yellow').addClass('hidden').delay(500).queue(function() {
                    $(this). removeClass('hidden').dequeue();
                });

                $('#blue').addClass('hidden').delay(500).queue(function() {
                    $(this).removeClass('hidden').dequeue();
                });

                $('#green').addClass('hidden').delay(500).queue(function() {
                    $(this).removeClass('hidden').dequeue();
                });
                i++;
                setTimeout(correct, 700);
            }
        }
        correct();
    };
    
//MID-CHECK
    var midCheck = function(arr1, arr2) {
        if(arr1[clickCount - 1] === arr2[clickCount - 1]) {
            return true;
        }
        else if(arr1[clickCount - 1] !== arr2[clickCount - 1]) {
            return false;
        }
    };
    
//ALERT
    var alert = function() {
        var i = 0;
        
        function disp() {
            if(i < 3) {
                $('#alert').removeClass('hidden').delay(500).queue(function() {
                    $(this).addClass('hidden').dequeue();
                });
                i++;
                setTimeout(disp, 800);
            }
        }
        disp();
    };
    
    
//TURNCOUNT
    var turnCountDisp = function() {
        $("#turncount").text(turnCount.toString());
    };
    
    //RED CLICK
    $('#red').click(function() {
        playerInput("red");
        redAudio.play();
        $('#red').addClass('hidden').delay(500).queue(function() {
            $(this).removeClass('hidden').dequeue();
        });
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                clickCount = 0;
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                setTimeout(correctInput, 600);
                setTimeout(simonSays, 2000);
            }
            else {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount > playerOrder.length) {
            if (midCheck(simonOrder, playerOrder) === false) {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount < playerOrder.length) {
            alert();
            setTimeout(gameOver, 2000);
        }
    });

    //YELLOW CLICK
    $('#yellow').click(function() {
        playerInput("yellow");
        yellowAudio.play();
        $('#yellow').addClass('hidden').delay(500).queue(function() {
            $(this).removeClass('hidden').dequeue();
        });
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                clickCount = 0;
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                setTimeout(correctInput, 600);
                setTimeout(simonSays, 2000);
            }
            else {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount > playerOrder.length) {
            if (midCheck(simonOrder, playerOrder) === false) {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount < playerOrder.length){
            alert();
            setTimeout(gameOver, 2000);
        }
    });

    //BLUE CLICK
    $('#blue').click(function() {
        playerInput("blue");
        blueAudio.play();
        $('#blue').addClass('hidden').delay(500).queue(function() {
            $(this).removeClass('hidden').dequeue();
        });
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                clickCount = 0;
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                setTimeout(correctInput, 600);
                setTimeout(simonSays, 2000);
            }
            else {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount > playerOrder.length) {
            if (midCheck(simonOrder, playerOrder) === false) {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount < playerOrder.length) {
            alert();
            setTimeout(gameOver, 2000);
        }
    });


    //GREEN CLICK
    $('#green').click(function() {
        playerInput("green");
        greenAudio.play();
        $('#green').addClass('hidden').delay(500).queue(function() {
            $(this).removeClass('hidden').dequeue();
        });
        if(turnCount === playerOrder.length) {
            if(orderCheck()) {
                clickCount = 0;
                playerOrder = [];
                turnCount++;
                turnCountDisp();
                setTimeout(correctInput, 600);
                setTimeout(simonSays, 2000);
            }
            else {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount > playerOrder.length) {
            if (midCheck(simonOrder, playerOrder) === false) {
                alert();
                setTimeout(gameOver, 2000);
            }
        }
        else if(turnCount < playerOrder.length) {
            alert();
            setTimeout(gameOver, 2000);
        }
    });
    
    
}); //DOCUMENT READY END