Math.max(1,10) //returns 10
Math.max(-100,10) //returns 10

Using apply as part of the method call can define scope of the array.
var myNumArray = [1,2,3,4,5,6,7,8,9]; 
Math.max.apply(null,myArray); //returns 9
This would give you the same result:
Math.max.apply(this,myArray); //returns 9

Math.max.apply(myArray) //returns –Infinity
Math.max(myArray) //Returns NaN
