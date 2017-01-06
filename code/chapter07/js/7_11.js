var numberArray = [1, 2, 3, 4, 5, 6];
//console.log(numberArray.copyWithin(3, 0)); //returns [1, 2, 3, 1, 2, 3]
console.log(numberArray.copyWithin(0, 3)); //returns [4, 5, 6, 4, 5, 6]