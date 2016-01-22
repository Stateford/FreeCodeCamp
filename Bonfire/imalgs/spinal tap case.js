function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var spinalArr = [];
    var final = '';
    
    for(var i = 0; i < str.length; i++) {
        spinalArr = str.split('');
    }
    
    for(var l = 0; l < spinalArr.length; l++) {
        spinalArr[l] = spinalArr[l].replace(/\s/, '-');
        spinalArr[l] = spinalArr[l].replace(/[_]/, '-');
    }
    
    final = spinalArr.join('');
    
    
    for(var x = 0; x < final.length; x++) {
        var insertspace = '';
        if(x > 0 && final.charAt(x) === final.charAt(x).toUpperCase() && final.charAt(x - 1) !== '-' && final.charAt(x) !== '-') {
            var first = final.substr(0, x);
            var last = final.substr(x, final.length);
            final = first + '-' + last;
            x++;
        }
    }
    final = final.toLowerCase();
    return final;
}


console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('This_Is_Spinal_Tap'));
console.log(spinalCase('ThisIsSpinalTap'));