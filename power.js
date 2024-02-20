#!/usr/bin/env node

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1

function power(base, component){
    if(base == 1 || component == 0) return 1;
    if(component == 1) return base;
    
    return base * power(base, component-1)

}

let output = power(3,3)
console.log(output)