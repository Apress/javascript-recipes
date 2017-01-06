// JavaScript Document

var myNumberObject = new Number(2);


console.log(myNumberObject);
if(myNumberObject.valueOf() === 2){
	console.log('we are the same');
}

console.log(typeof parseInt('2')); // returns number
console.log(typeof parseFloat('2')); //returns number
console.log(typeof parseFloat(myNumberObject)); //returns number
