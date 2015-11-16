function sumAll(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    
    return ((max - min) + 1) * (min + max) / 2;
}

sumAll([1, 4]);
