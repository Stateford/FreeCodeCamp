function where(collection, source) {
    
    return collection.filter(function (obj) {
        return Object.keys(source).every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
})
    
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
