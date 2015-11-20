function unite(arr1, arr2, arr3) {
    var final = [];

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];

        for (var x = 0; x < arg.length; x++) {
            var check = arg[x];

            if (final.indexOf(check) < 0) {
                final.push(check);
            }
        }
    }
    return final;
}


console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));