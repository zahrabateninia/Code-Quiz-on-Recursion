#!/usr/bin/env node 

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

var allAreLessThanSeven = all([1,2,9], function(num){
    return num < 7
});

console.log(allAreLessThanSeven())

function all(arr, callback){
    let copy = copy || Array.slice // Create a shallow copy of the original array
    
}