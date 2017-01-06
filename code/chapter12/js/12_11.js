function showSpread(one, two, three, four){
	console.log(one);
	console.log(two);
	console.log(three);
	console.log(four);
}

var myArray = [1,2,3,4];
//showSpread(myArray[0], myArray[1], myArray[2], myArray[3]) //without using spread
//showSpread(...myArray); //using the spread syntax

var dayInfo = [1975, 7, 19];
var dateObj = new Date(...dayInfo);
console.log(dateObj); //returns Tue Aug 19 1975 00:00:00 GMT-0400 (EDT)

var numArray2 = [ 2, 3, 4, 5, 6, 7]
var numArray = [1, ...numArray2, 8, 9, 10];

console.log(numArray); //returns 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var part1 = [1,2,3];
var part2 = [4,5,6];

var part3 = [...part1, ...part2];

console.log(part3); //returns 1,2,3,4,5,6