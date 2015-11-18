function pair(str) {
    var dict = {
        G: ['G', 'C'],
        C: ['C', 'G'],
        A: ['A', 'T'],
        T: ['T', 'A']
    };
    
    var final = [];
    for(var i = 0; i < str.length; i++){
        var midway = dict[str.charAt(i)];
        final.push(midway);
    }
    
    return final;
}


//var midway = ffxiv[getinput.charAt(i)]
//TA AT GC CG 