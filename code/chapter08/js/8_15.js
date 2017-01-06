var  numArray = [2,2,3,6,7,7,7,7,8,9];

var uniqueArray = numArray.filter(function(element, index, arrayObj){
	 return arrayObj.indexOf(element) == index;
	});
	
console.log(uniqueArray); //returns [2, 3, 6, 7, 8, 9]

