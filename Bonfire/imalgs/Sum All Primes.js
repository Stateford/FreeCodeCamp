function sumPrimes(num) {
    let numbers = [];
    let prime = [];
    let total = 0;
    for(let i = 0; i <= num; i++) {
        if(i >= 2) {
            numbers.push(i);
        }
    }

    for(let i of numbers) {
        let notPrime = false;
        for(let l = 2; l < i; l++) {
            if(i % l === 0 && l !== i) {
                notPrime = true;
            }
        }
        if(!notPrime) {
            prime.push(i);
        }
    }

    for(let i of prime) {
        total += i;
    }
    console.log(total);
    return total;
}
