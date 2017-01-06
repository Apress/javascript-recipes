function myValues(...values){
	return values	
}

console.log(myValues(1,2,3)); // returns [1, 2, 3]
console.log(myValues(1,2,3,4,5,6)); // returns [1, 2, 3, 4, 5, 6]

var firstThree = ['One', 'Two', 'Three'];
var myArray = [...firstThree, 4, 5, 6];
console.log(myArray); // returns  ["One", "Two", "Three", 4, 5, 6]


[a ,b, ...otherShips] = ['Tardis', 'X-Wing', 'B-Wing', 'Enterprise', 'Moya']
console.log(otherShips); // returns ["B-Wing", "Enterprise", "Moya"]