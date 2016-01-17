//STREAM LIST
var streamList = ['arteezy', 'eternalenvy', 'feardarkness', 'd3xt3r'];


$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});