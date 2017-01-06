function showRest(one, two, ...everyThingElse){
	console.log(one);  //returns 1
	console.log(two); //returns 2
	console.log(everyThingElse); //returns 3,4,5,6,7,8,9
	console.log(everyThingElse[0]); //returns 3
	console.log(everyThingElse.length); //returns 7
}

showRest(1, 2, 3,4,5,6,7,8,9);

function runForEach(...numberArray){
	numberArray.forEach(function(el, index, arr){
		console.log(el);  //returns 3, 4, 5, 6, 7, 8, 9
	});
}

runForEach(3,4,5,6,7,8,9);