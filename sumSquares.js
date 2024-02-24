#!/usr/bin/env node

// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(arr){
    let total = 0;
    let arrLen = arr.length;
    // base case
    if(arrLen === 0) return 0;

    for(let i=0; i<arrLen ; i++){
        if(Array.isArray(arr[i])){
            total += sumSquares(arr[i])
        }else{
            total += arr[i] * arr[i]
        }
    }
    return total;

}

let l = [[1,2],3]; 
console.log(sumSquares(l)); // 14
