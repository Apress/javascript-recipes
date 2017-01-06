var evalMsg = new EvalError('This is an eval error');

console.log(evalMsg.message); //returns This is an eval error

new Array(-1);  //returns RangeError: Invalid array length
32.3333.toExponential(-1) //returns RangeError
434.2322.toFixed(-100) //return RangeError
 

var rangeMsg = new RangeError('This is a Range error');

console.log(rangeMsg.message); //returns This is a Range error

console.log(myVar); //returns Uncaught ReferenceError: myVar is not defined

window.alert( //return Uncaught SyntaxError: Unexpected end of input

var myObj = new Object();
console.log(myObj.causeError()) //returns Uncaught TypeError: myObj.causeError is not a function

decodeURIComponent('a%AFc'); //returns Uncaught URIError: URI malformed
 
