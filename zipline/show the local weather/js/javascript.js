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
    return final.toFixed(0);
};

//CONVERT TO CELCIUS
var toCelcius = function(num) {
    console.log('toCelcius');
    var final = (num - 273.15);
    return final.toFixed(0);
};

//CURRENTDATE
var today = new Date();
var todaydate = (today.getMonth()+1) + '.'
                + today.getDate() + '.'
                + today.getFullYear();

// JQUERY
$(document).ready(function() {

    //VARS
    var kelvin;
    var kelvinLow;
    var kelvinHigh;

    //INFO UPDATE
        // IMPERIAL
    var farenheit = function() {
        $('#temp').text(toFarenheit(kelvin) + '℉');
        $('#low').text(toFarenheit(kelvinLow) + '℉');
        $('#high').text(toFarenheit(kelvinHigh) + '℉');
    };
        //SI
    var celcius = function() {
        $('#temp').text(toCelcius(kelvin) + '℃');
        $('#low').text(toCelcius(kelvinLow) + '℃');
        $('#high').text(toCelcius(kelvinHigh) + '℃');
    }

    //GEOLOCATION
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var geo = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9fd403f8e6ce431725408e24c1f50748'
            $.getJSON(geo, function(data) {
                console.log('getting JSON');
                kelvin = data.main.temp;
                kelvinLow = data.main.temp_min;
                kelvinHigh = data.main.temp_max;

                $('#date').text(todaydate);
                $('#icon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
                $('#icon').removeClass('hidden');
                $('#description').text(data.weather[0].description);
                $('#location').text(data.name + ', ' + data.sys.country);
                farenheit();
            })
        });
    };

    //BUTTONS
    $('#farenheit').click(function() {
        farenheit();
    });

    $('#celcius').click(function() {
        celcius();
    });
});
