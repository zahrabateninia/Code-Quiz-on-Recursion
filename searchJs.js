#!/usr/bin/env node

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(object, searchValue){
    // base case: if the one of the conditions is met, it means that the object is not an object itself, but rather a primitive value or null
    if(typeof object !== "object" || object === null ){
        return searchValue === object; 
    }

    // Recursive case: if the object is an Object (but not null), iterate over its values
    for (const value of Object.values(object)) { // Object.values(object) takes an object and returns a list containing object's values
        // Recursively call contains for each value
        if (contains(value, searchValue)) {
            return true; // If the searchValue is found in any nested object, return true
        }
    }

    return false
}