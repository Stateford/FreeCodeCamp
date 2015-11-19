function boo(bool) {
    var myArray = [true, false];
    for(var i = 0; i < myArray.length; i++) {
        if(bool === myArray[i]) {
            return true;
        }
    }
    return false;
}

console.log(boo(true));
console.log(boo(false));