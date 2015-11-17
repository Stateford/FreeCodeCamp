function translate(str) {
    var final = '';
    var regex = /[aeiou]/gi;
    
    if(str.charAt(0).match(regex)) {
        final = str + 'way';
    } else {
        var vowel = str.indexOf(str.match(regex)[0]);
        
        final = str.substring(vowel) + str.substr(0, vowel) + 'ay';
    }
    return final;
}

console.log(translate("consonant"));
console.log(translate('assist'));
console.log(translate('glove'));
console.log(translate('eight'));