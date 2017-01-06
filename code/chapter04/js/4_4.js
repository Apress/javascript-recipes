// JavaScript Document
'use strict'

var numObj = 1.23456789;


console.log(numObj.toPrecision());    // logs 5.123456
console.log(numObj.toPrecision(2)); //returns 1.2
console.log(numObj.toPrecision(5)); //returns 1.2346 Five numbers total. Notice how it is rounded up


console.log(numObj.toFixed(5));   // retuns 1.23457 notice how it rounds up
console.log(numObj.toFixed(2));   // returns 1.2


console.log(Math.round(1.006*100)/100);
