function where(arr, num) {
    var sorted = arr.sort(function(a, b) {
        return a - b;
    });
    console.log (sorted);
    
    for(var i = 0; i < sorted.length; i++) {

        if(num <= sorted[i]) {
            return i;
        } 
}
    return sorted.length;
}


console.log(where([2, 5, 10], 15));
