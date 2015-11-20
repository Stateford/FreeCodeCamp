function convert(str) {
    var final = '';
    for (var i = 0; i < str.length; i++) {
        switch(str.charAt(i)) {
            case '&':
                final += '&amp;';
                break;
            
            case '<':
                final += '&lt;';
                break;
            
            case '>':
                final += '&gt;';
                break;
                
            case '"':
                final += '&quot;';
                break;
                
            case "'":
                final += '&apos;';
                break;
                
            default:
                final += str.charAt(i);
                break;
        }
    }
    return final;
}
console.log(convert("Dolce & Gabbana"));