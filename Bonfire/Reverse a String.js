function reverseString(str) {
    var myArray = str.split('');
    var reversed = myArray.reverse();
    reversed = reversed.join('');
    return reversed;
}