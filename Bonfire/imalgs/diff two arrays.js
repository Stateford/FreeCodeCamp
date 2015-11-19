function diff(arr1, arr2) {
    var newArr = [];

    Array.prototype.push.apply(newArr, arr1);
    Array.prototype.push.apply(newArr, arr2);

    function filterSame(obj) {
        if (arr1.indexOf(obj) === -1 || arr2.indexOf(obj) === -1) {
            return obj;
        }
    }
    return newArr.filter(filterSame);
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
