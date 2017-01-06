//convert and array into a string.

numberArray = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
console.log(numberArray); // retuns [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
console.log( numberArray.toString() ); //returns 1,2,3,4,5,6,7,8,9
console.log( numberArray.join('') ); //returns 123456789
console.log( numberArray[0].toString() ); //returns 1