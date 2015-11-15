function truncate(str, num) {
    var strsub = str.substr(0, num);
    var strsub3 = str.substr(0, num - 3);
    
    if(str.length <= num) {
        return str;
    }
    
    else if(num <= 3){
        var final = strsub + '...';
        return final;
    }
    else if(str.length > 3) {
        var final = strsub3 + '...';
        return final;
    }
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));

console.log(truncate('absolot', 2));
