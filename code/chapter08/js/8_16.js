var  numArray = [2,2,3,6,7,7,7,7,8,9];
var countObj = {};

var uniqueArray = numArray.forEach(function(element, index, arrayObj){
	  if(countObj[element]){
		countObj[element] = countObj[element] + 1;	  
	  }else{
		countObj[element] = 1;  
	  }
	});
	
console.log(countObj); //returns Object {2: 2, 3: 1, 6: 1, 7: 4, 8: 1, 9: 1}

