var multiDArray = [[7,8], [3,4], [1,2], [5,6]];

multiDArray.sort(function(a,b){
	return a[0] - b[0]; 
});
console.log(multiDArray); //returns [[1,2], [3,4], [5,6], [7,8]];