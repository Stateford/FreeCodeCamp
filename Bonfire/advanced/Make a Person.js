"use strict";

class Person {
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
