function repeat(str, num) {
    var total = 0;
    var final = '';
    var finalArray = [];
    
    if(num < 0) {
        return final;
    } else {
        var final = str.substr(0, str.length);
        while(total < num) {
            finalArray.push(final);
            total++;
        }
        }
    final = finalArray.join('');
    return final;
    }

console.log(repeat("abc", 3));
