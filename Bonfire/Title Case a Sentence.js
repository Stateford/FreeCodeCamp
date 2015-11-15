function titleCase(str) {
    var myArray = [];
    var uppercase = '';
    var final = '';
    var finalArray = [];
    var myArray = str.split(' ');
    
    
    for(var i = 0; i < myArray.length; i++){
        var currentword = myArray[i];
        var midway = '';
        
        for(var x = 0; x < currentword.length; x++) {
            var currentletter = currentword.charAt(x);
            
            if(x === 0) {
                uppercase = currentletter.toUpperCase();
                midway = uppercase;
            }
            else {
                lowercase = currentletter.toLowerCase();
                midway += lowercase;
            }
        }
        finalArray.push(midway);
    }
    final = finalArray.join(' ');
    return final;
}

titleCase("I'm a little tea pot");
