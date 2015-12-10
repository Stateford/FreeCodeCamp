function sumPrimes(num) {
    var prime = [];
    var total = 0;
    
    for(var i = 0; i < num; i++) {
        if(num % i === 0) {
            prime.push(i);
        }
    }
    
    for(var x = 0; x < prime.length; x++) {
        total += prime[i];
    }
    console.log(total);
    console.log(prime);
    return total;
}

console.log(sumPrimes(10));
console.log(sumPrimes(19));