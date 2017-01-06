class CheckArrayInstance {
	static [Symbol.hasInstance](instance){
		 
		return Array.isArray(instance)
	}
}

var myArray = new Array();

console.log(myArray instanceof CheckArrayInstance); //returns true


function Constructor() {  
  // constructor code
}
let obj = new Constructor();  
let objProto = Object.getPrototypeOf(obj); 

console.log(obj)
console.log(objProto)

objProto === Constructor.prototype; // => true  
obj instanceof Constructor;         // => true  
obj instanceof Object;

