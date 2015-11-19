function fearNotLetter(str) {
    for(var i = 0; i < str.length; i++){
        var unicode = str.charCodeAt(i);
        if(unicode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(unicode-1);
        }
    }
    return undefined;
}



console.log(fearNotLetter("abce"));

console.log(fearNotLetter('abcdefhi'))
