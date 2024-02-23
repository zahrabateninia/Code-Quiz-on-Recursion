#!/usr/bin/env node 

// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arr){
    //  base case
    if (arr.length === 0 ) return false;

    let total = 0;
    let first = arr.shift() // first element of the array 

    if(Array.isArray(first)){
        total+= totalIntegers(first) // if the first element of the array is an array so call totalIntegers with first as a parameter 
    }
    else if( Number.isInteger(first)){
        total += 1;
    }

    // if it was neither an int nor an array:
    return total + totalIntegers(arr)

    }
console.log(seven)