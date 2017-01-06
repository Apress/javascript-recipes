var myArray = [9, 2, 7, 6, 8, 5, 3];

myArray.forEach(function(element, index, array){
	console.log(element + ' element'); //returns 9, 2, 7, 6, 8, 5, 3
	console.log(index + ' index ');  //returns 0 ,1, 2, 3, 4, 5, 6
	console.log(array + ' array '); //returns the entire array
});
