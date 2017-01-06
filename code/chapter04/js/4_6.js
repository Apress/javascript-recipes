// JavaScript Document

var myNumber = 1

console.log(Number.isInteger(myNumber));//returns true does not work in IE
console.log(Number.isInteger('2')); //returns false does not work in IE

console.log(Math.floor(1.6)); //returns 1
console.log(Math.floor(1.4)); //returns 1
console.log(Math.floor(NaN)); //returns NaN

console.log(Math.ceil(1.6)); //returns 2
console.log(Math.ceil(1.4)); //returns 2


console.log(Math.round(1.6)); //returns 2
console.log(Math.round(1.4)); //returns 1

console.log(Math.round(-1.5)); //returns -1
console.log(Math.round(-1.6)); //returns -1

console.log(Math.round('3.5')); //returns -1
console.log(Math.round('jenny')); //returns NaN
console.log(Math.round(null)); //returns 0
