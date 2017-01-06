var myArray = [9, 2, 7, 6, 8, 5, 3];

var elementsOver5 = myArray.filter(function(element){
	return element > 5;
});

console.log(elementsOver5); //returns [9, 7, 6, 8]
