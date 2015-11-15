function bouncer(arr) {
    function falsy(x) {
        return Boolean(x);
    }

    var myArray = arr.filter(falsy);
    return myArray;
};
    
    
    
console.log(bouncer([7, "ate", "", false, 9, undefined, null]));

console.log(bouncer([false, null, 0, NaN, undefined, ""]));