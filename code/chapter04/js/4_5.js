// JavaScript Document

var myNumberObject = new Number(2);


console.log(isFinite(myNumberObject)); //returns true
console.log(isFinite(2)); //returns true
console.log(isFinite('myNumberObject')); //returns false
console.log(Number.isFinite(myNumberObject.valueOf())); //returns true
console.log(Number.isFinite(myNumberObject)); //returns false
console.log(Number.isFinite('myNumberObject')); //returns false

console.log(Number.isFinite(NaN)); //returns false
console.log(isFinite(NaN)); //returns false
console.log(isFinite(null)); //returns false
console.log(Number.isFinite(null)); //returns false
