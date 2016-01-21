//GET BY ZIPCODE
var getByZip = function(arg) {
    console.log('getByZip');
    var regex = /\D/g;
    var zip = arg.replace(regex, '');
    console.log('zipcode: ' + zip);
    
    if(arg.match(/[^$,.\d]/)) {
        return false;
    }
    else if(arg.length === 5) {
        return 'http://api.openweathermap.org/data/2.5/weather?zip=' + arg + ',us&appid=9fd403f8e6ce431725408e24c1f50748';
    }
    else {
        return false;
    }
};

// FARENHEIT
var toFarenheit = function(num) {
    console.log('toFarenheit');
    var final = ((num * (9/5)) - 459.67);
    return final;
};

//CONVERT TO CELCIUS
var toCelcius = function(num) {
    console.log('toCelcius');
    var final = (num - 273.15);
    return final;
};

// JQUERY
$(document).ready(function() {
    
    var kelvin;
    //GEO LOCATION
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var geo = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9fd403f8e6ce431725408e24c1f50748'
            $.getJSON(geo, function(data) {
                console.log('getting JSON');
                kelvin = data.main.temp;
                $('#city').text(data.name);
                $('#temp').text('Currently: ' + toFarenheit(kelvin) + ' &#8457;');
            })
        });
    };
});