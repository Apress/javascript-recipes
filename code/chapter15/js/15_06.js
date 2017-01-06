class ArraySubClass extends Array{
	static get [Symbol.species]() {return Array;}
}




var subClassInstance = new ArraySubClass(1,2,3,4,5,6);

var derivedObj = subClassInstance.filter(function(value){
	if(value % 2){
		return value
	}
});

console.log(derivedObj) //returns 1,3,5
console.log(derivedObj instanceof Array);  //return true
console.log(derivedObj instanceof ArraySubClass);  //return false