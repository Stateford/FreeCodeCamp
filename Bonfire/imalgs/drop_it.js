function dropElements(arr, func) {
    let arrLength = arr.length;
    for(let i = 0; i < arrLength; i++) {
        if(func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}
