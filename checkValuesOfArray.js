#!/usr/bin/env node 

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

var allAreLessThanSeven = all([1,2,9], function(num){
    return num < 7
});

function all(arr, callback){
    // Initialize copy with a shallow copy of the array only if copy is falsy ( undefined, NULL, false, 0, NAN)
    var copy = copy || arr.slice() // Create a shallow copy of the original array
    // base case of recursive function:
    if (copy.length === 0) return true;

    if(callback(copy[0])){
        copy.shift() // Remove the first element of the copied array
        return all(copy, callback)
    }else{
        return false
    }

}

console.log(allAreLessThanSeven); // false

