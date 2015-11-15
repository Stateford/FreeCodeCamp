function slasher(arr, howMany) {
    for(var i = 0; i < arr.length; i++){
        if(arr.length < howMany){
            return [];
        }
        else if(arr.length === howMany) {
            return arr.slice(howMany);
        }
        
        else{
            return arr.slice(howMany, arr.length);
        }
    }
    
    return arr;
}

slasher([1, 2, 3, 4], 2);