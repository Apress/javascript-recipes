// JavaScript Document
'use strict'

var x = '1';

console.log(parseFloat('+1x2345x')); //returns 1
console.log(Number.parseFloat('+1234x567')); //returns 1234

console.log(typeof parseInt(x)); // returns number
console.log(typeof parseFloat(x)); //returns number

/*
console.log(parseInt('x'));
console.log(parseFloat('x'));

console.log(typeof parseInt('1')); //returns number
console.log(typeof parseFloat('1')); //returns number


console.log( Number(x) );
console.log( Number('x') );
console.log( Number('1') );


console.log( Number.parseInt(x, 10) );
console.log( Number.parseInt('x', 10) );
console.log( Number.parseInt('1', 10) );

console.log( Number.parseFloat(x) );
console.log(+x);
*/
