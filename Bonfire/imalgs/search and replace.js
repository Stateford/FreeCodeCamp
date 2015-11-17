function myReplace(str, before, after) {
    var arr = str.split(' ');
    var final = '';
    
    var uppercase ='';
    
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.substr(1, after.length);
        
    }
    
    
    for(var words in arr) {
        if(arr[words] === before) {
            arr.splice(words, 1, after);
            final = arr.join(' ');
        }
    }
    
    return final;
    
};

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us get back to more Coding", "Coding", "bonfires"));