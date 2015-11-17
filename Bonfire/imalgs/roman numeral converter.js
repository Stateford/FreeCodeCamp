function convert(num) {
    var myString = num.toString();
    var romnum= [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]    
    var arabic = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var final = '';
    
    
    for(var i = 0; i < arabic.length; i++) {
        while(arabic[i] <= num) {
            final += romnum[i];
            num -= arabic[i];
        }
        
    }
    return final;
};

console.log(convert(36));
