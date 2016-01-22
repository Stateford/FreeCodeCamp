function rot13(str) { // LBH QVQ VG!

    var unicodeVal = [];
    var finalVal = [];
    var finalStr = '';
    
    for(var i = 0; i < str.length; i++) {
        unicodeVal.push(str.toUpperCase().charCodeAt(i));
    }
    
    for(var x = 0; x < unicodeVal.length; x++) {
        if(unicodeVal[x] === 32) {
            finalVal.push(unicodeVal[x]);
        }
        else if(unicodeVal[x] <= 77 && unicodeVal[x] >= 65) {
            finalVal.push(unicodeVal[x] + 13);
        }
        else if(unicodeVal[x] > 77 && unicodeVal[x] <= 90) {
            finalVal.push(unicodeVal[x] - 13);
        }
        else {
            finalVal.push(unicodeVal[x]);
        }
    }
    
    for(var l = 0; l < finalVal.length; l++) {
        finalStr = finalStr + String.fromCharCode(finalVal[l]);
    }

    return finalStr;
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
