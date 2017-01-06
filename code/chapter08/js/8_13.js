var numArray = [1,2,3,4,5,6];
var reducedValue = numArray.reduce(function(prev, current){
		return prev + current;
	});
	
	console.log(reducedValue); //returns 21
