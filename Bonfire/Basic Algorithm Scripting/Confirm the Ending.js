function end(str, target) {
    
    var lastword = str.substr(-target.length);
    
    
    if(lastword === target) {
        return true;
    } 
    else {
        return false;
    }
};

end("Bastian az zaan", "n");
