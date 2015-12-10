function sumFibs(num) {
    var fib = [1,1,2,3,5,8];
    var total = 0;
    
    while(fib[fib.length - 1] < num) {
        fib.push(fib[(fib.length - 2)] + fib[(fib.length - 1)]);
    }
    
    for(var x = 0; x < fib.length; x++) {
        if(fib[fib.length - 1] > num) {
            fib.pop();
        };
    }
    
    for(var i = 0; i < fib.length; i++) {
        if(fib[i] % 2 === 1) {
        total += fib[i];
        }
    }
    console.log(fib);
    return total;
}

console.log(sumFibs(4));
