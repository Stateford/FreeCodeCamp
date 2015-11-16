function factorialize(num) {
    var factor = 1;
    for(var i = 2; i <= num; i++) {
        factor = factor * i;
    }
    return factor;
}

console.log(factorialize(5));
