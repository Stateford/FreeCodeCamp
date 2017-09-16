
function binaryAgent(str) {
    str = str.split(" ");
    let final = '';
    for(let i in str) {
        final += String.fromCharCode(parseInt(str[i], 2));
    }
    return final;
}


