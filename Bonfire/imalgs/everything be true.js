"use strict";

function truthCheck(collection, pre) {
    
    for(var obj in collection) {
        var objectLen = Object.keys(collection[obj]).length
        var keys = Object.keys(collection[obj])[0];
        for(var i = 0; i < objectLen -1; i++) {
            if(Object.keys(collection[obj])[i])
        }
    }
//    console.log(collection);
    return pre;
}

truthCheck(
    [
        {"user": "Tinky-Winky", "sex": "male"},
        {"user": "Dipsy", "sex": "male"}, 
        {"user": "Laa-Laa", "sex": "female"}, 
        {"user": "Po", "sex": "female"}
    ], 
    "sex");
