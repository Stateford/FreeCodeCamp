function findLongestWord(str) {
    var strlen = str.length;
    var strArray = [];
    strArray = str.split(' ');
    strArray = strArray.sort();
    var longestword = 0;
    var finalword= '';
    
    for(var i = 0; i < strArray.length; i++) {
        var currentword = strArray[i];
        if(currentword.length > longestword) {
            longestword = currentword.length;
            var finalword = currentword;
        }
    } 
    return longestword;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
