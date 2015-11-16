function largestOfFour(arr) {
    var finalArray = [];
    
    for(var i = 0; i < arr.length; i++) {
        var largestnum = 0;
        
        for(var n = 0; n < arr[i].length; n++)
            if(arr[i][n] > largestnum) {
            largestnum = arr[i][n];
        }
        finalArray[i] = largestnum;
    }
    return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
