// JavaScript Document

//4-17 reverse numbers in javascript using reverse method

var numSequece = 1234;
var reversedNumbers = parseInt(numSequece.toString().split('').reverse().join(''));

console.log(typeof reversedNumbers);

//if you could not use the reverse method.

var tempNumbers = 1234;
//console.log(Math.log(tempNumbers  * Math.LOG10E + 1 | 0))



var a = 123456789, b = 0;  // b must be defined with a value outside the loop
//console.log('a = ' + a);

while(a > 0)  {
//console.log('a = ' + a);
b = b * 10;


//console.log('a = ' + a); 
//console.log('a = ' + a%10); 

b = b + parseInt(a%10);  
//console.log('b = ' + b);  
a = parseInt(a/10); 
//console.log('a = ' + a); 
}  
console.log("Reversed number: " + b);  
