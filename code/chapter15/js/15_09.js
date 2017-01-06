
var myDate = new Date();
var myArray = new Array();
var myObj = new Object();

class myClass{};
var myClassObj = new myClass();

console.log(Object.prototype.toString.call(myDate));  //returns [object Date]
console.log(Object.prototype.toString.call(myArray)); // returns [object Array]
console.log(Object.prototype.toString.call(myObj));  //returns [object object]
console.log(Object.prototype.toString.call(myClassObj));  //returns [object object]

class WithToStringTag{
	get [Symbol.toStringTag](){
		return 'WithToStringTag';
	}
}

var withToStringTagObj = new WithToStringTag();
console.log(Object.prototype.toString.call(withToStringTagObj));  //returns [object WithToStringTag]