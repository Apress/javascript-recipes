var myArray = [9, 2, 7, 6, 8, 5, 3];

myArray.some(function(element){
	console.log(element == 9); //returns true then false for all the other values
});
