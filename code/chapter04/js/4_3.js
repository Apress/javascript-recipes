var numberObject = new Number('things');


function checkIsNaN(value){
  if(typeof(value) !== 'number'){
    return 'is not a number';
  }else{
    return 'is a number';
  }
}
console.log(checkIsNaN('1234')); //return is not a number

console.log(isNaN('things')); // true
console.log(Number.isNaN(numberObject.valueOf())); //returns true
console.log(Number.isNaN(4)); //returns false
console.log(Number.isNaN('4')); //returns false
console.log(Number.isNaN(NaN)); //returns true
