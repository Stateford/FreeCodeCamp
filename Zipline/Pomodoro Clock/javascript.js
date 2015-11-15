//BREAK LENGTH + WORKLENGTH + TIMER



$(document).ready(function() {
    var workTime = 25;
    var breakTime = 5;
    var miliseconds = workTime * 60 * 1000;
    var alert = new Audio('http://www.myinstants.com/media/sounds/tindeck_1.mp3');   // SOUND    
    
    
    var clock = new FlipClock($('#session-timer'), 1500, {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false,
        callbacks: {
            stop: function() {
                if(clock.getTime() <= 0) {
                    alert.play();
                    $('#session').removeClass('active');
                    breakclock.start(function(){
                        $('#break').addClass('active');
                        clock.setTime(workTime * 60);
                    })
                }
            }
        }
    })

    
    var breakclock = new FlipClock($('#break-clock'), 300, {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false,
        callbacks: {
            stop: function() {
                if(breakclock.getTime() <= 0) {
                    alert.play();
                    $('#break').removeClass('active');
                    clock.start(function(){
                        ('#session').addClass('active');
                        breakclock.setTime(breakTime * 60);
                    })
                }
            }
        }
    })
    
    
    $('#work-length-minus').click(function() {
        if(workTime < 1) {
            workTime = 1;
            clock.setTime(workTime * 60);
        }
        else if(workTime > 1) {
            workTime -= 1;
            $('#work-length').text(workTime);
            clock.setTime(workTime * 60);
        }
    })
    $('#work-length-plus').click(function() {
        if(workTime < 1) {
            workTime = 2;
            $('#work-length').text(workTime);
            clock.setTime(workTime * 60);
        }
        else {
            workTime += 1;
            $('#work-length').text(workTime);
            clock.setTime(workTime * 60);
        }
    });
    

    $('#startstop-btn').click(function() {                      //TOGGLE START/STOP CLASS
        if($('#startstop-btn').val() === 'Start') {             //START
            $('#startstop-btn').removeClass('btn-primary');
            $('#startstop-btn').addClass('btn-danger');
            $('#startstop-btn').val('Stop');
            $('#session').addClass('active');
            clock.start(function() {
});
        } 
        else if($('#startstop-btn').val() === 'Stop') {       //STOP
            $('#startstop-btn').removeClass('btn-danger');
            $('#startstop-btn').addClass('btn-primary');
            $('#startstop-btn').val('Start');
            $('#session').removeClass('active');
            $('#break').removeClass('active');
            breakclock.setTime(breakTime * 60);
            clock.stop(function() {
});
            breakclock.stop(function(){
                
            })
    }
    });
    $('#break-length-minus').click(function() {
        if(breakTime < 1) {
            breakTime = 1;
            breakclock.setTime(breakTime * 60);
        }
        
        else if(breakTime > 1) {
            breakTime -= 1;
            $('#break-length').text(breakTime);
            breakclock.setTime(breakTime * 60);

            }
        });
        $('#break-length-plus').click(function() {
            if(breakTime < 1) {
                breakTime = 2;
                $('#break-length').text(breakTime);
                breakclock.setTime(breakTime * 60);

            }
            else {
                breakTime += 1;
                $('#break-length').text(breakTime);
                breakclock.setTime(breakTime * 60);
        }
    });
    
    
    
});

    







