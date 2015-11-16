function palindrome(str) {
    var regularex = str.replace(/[\W_]/g, '');
    var lowercase = regularex.toLowerCase();
    var myArray = [];
    myArray = lowercase.split('');
    var reversed = myArray.reverse();
    var reversetedstr = reversed.join('');
    if(lowercase === reversetedstr){
        return true;
    } else {
        return false;
    }
}
    

console.log(palindrome("race car"));