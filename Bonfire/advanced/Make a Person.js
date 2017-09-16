"use strict";

let Person = function(firstAndLast) {
    this.setFullName(firstAndLast);
}

Person.prototype.setFirstName = function(first) {
    return this.firstName = first;
}

Person.prototype.setLastName = function(last) {
    return this.lastName = last;
}

Person.prototype.setFullName = function(firstAndLast) {
    let arr = firstAndLast.split(" ");
    if(arr.length <= 2) {
        this.firstName = arr[0];
        this.lastName = arr[1];
    } else {
        console.log('That is not a valid name');
    }
}

Person.prototype.getFirstName = function() {
    return this.firstName;
}

Person.prototype.getLastName = function() {
    return this.lastName;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

class aerson {
    constructor(firstAndLast) {
        this.setFullName(firstAndLast);
    }
    setFirstName(first) {
        this.firstName = first;
    }
    setLastName(last) {
        this.lastName = last;
    }
    setFullName(firstAndLast) {
        var arr = firstAndLast.split(' ');
        if(arr.length <= 2) {
            this.firstName = arr[0];
            this.lastName = arr[1];
        } else {
            console.log('That is not a valid name');
        }
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var bob = new Person("Bob Ross");
console.log(`FIRSTNAME: ${bob.firstName}`);
console.log(`LASTNAME: ${bob.lastName}`);

console.log(`GETFIRSTNAME: ${bob.getFirstName()}`);
console.log(`GETLASTNAME: ${bob.getLastName()}`)
console.log(`GETFULLNAME: ${bob.getFullName()}`);

bob.setFirstName("Haskell");
console.log(`NEWNAME: ${bob.getFullName()}`);
bob.setLastName("Curry");
console.log(`NEWNAME: ${bob.getFullName()}`);

bob.setFullName("Idiet Moran");
console.log(`SETFULLNAME: ${bob.getFullName()}`);
