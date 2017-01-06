var numberSet = new Set();
	numberSet.add(1);
	numberSet.add(2);
	numberSet.add(3);
	numberSet.add(3); //does not get added
	console.log(numberSet.entries()); //returns SetIterator {[1, 1], [2, 2], [3, 3]}
	
var numArray = new Array();
	numArray.push(1);
	numArray.push(2);
	numArray.push(3);
	numArray.push(3);
	console.log(numArray); //returns [1, 2, 3, 3]