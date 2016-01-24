//STREAM LIST
var streamList = ['arteezy', 'eternalenvy', 'feardarkness', 'd3xt3r'];


$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});

$(document).ready(function() {
    
    //ONLINE TAB
    $('.online').click(function() {
        $('.offline').removeClass('active');
        $('.all').removeClass('active');
        $('.online').addClass('active');
    });
    
    
    //OFFLINE TAB
    $('.offline').click(function() {
        $('.offline').addClass('active');
        $('.online').removeClass('active');
        $('.all').removeClass('active');
    });
    
    //ALL TAB
    $('.all').click(function() {
        $('.offline').removeClass('active');
        $('.all').addClass('active');
        $('online').removeClass('active');
    });
});