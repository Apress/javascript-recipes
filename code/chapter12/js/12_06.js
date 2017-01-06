
//before ES6, checking  if a property has a value
function doMath(num1, num2){
	var num2 = typeof num2 !== 'undefined' ? num2: 10;
	return num1 + num2;
}


console.log(doMath(1, null)); //returns 11
console.log(doMath(1,4)); //returns 5

//using ES6 default properties
function ES6DoMath(num1, num2 = 10){
	return num1 + num2;
}

console.log(ES6DoMath(1)); //returns 11
console.log(ES6DoMath(1,4)); //returns 5


function doCount(first, second = first + 1, third = second + 1){
	return [first, second, third];
}

console.log(doCount(1)); //returns [1,2,3]



