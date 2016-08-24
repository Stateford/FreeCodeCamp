function addTogether(...arg) {
    let total = 0;
    if(arg.length >= 2) {
        for(let num of arg) {
            if(typeof num === 'number') {
                total += num;
            } else if(typeof num !== 'number') {
                return undefined;
            }
        }
        return total;
    } else if(typeof arg[0] !== 'number') {
        return undefined;
    } else {
        try {
            for(let num of arg) {
                if(typeof num !== "number") {
                    return "undefined";
                } else {
                    total += num;
                }
            }
            return function(c) {
                if(typeof c !== 'number') {
                    return undefined;
                } else {
                    total += c;
                    return total;
                }
            };
        } catch(e) {
            throw e;
        }
        return total;
    }
    return total;
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
