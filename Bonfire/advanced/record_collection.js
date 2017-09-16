
// Setup
let collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
let collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if(prop === "artist" || prop === "album" && prop !== "tracks") {
        if(value === "") {
            delete collection[id][prop];
        } else {
            collection[id][prop] = value;
        }
    } else if(prop === "tracks") {
        if(value === "") {
            delete collection[id][prop];
        } else if(typeof collection[id][prop] === 'undefined') {
            collection[id][prop] = [value];
        } else {
            collection[id][prop].push(value);
        }
    }
    console.log(collection);
    return collection;
}

// Alter values below to test your code
// updateRecords(5439, "artist", "ABBA");
updateRecords(2548, "tracks", "")
