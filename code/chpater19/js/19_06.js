var rngError = new RangeError('The value is out of range');
	console.log(rngError.message);  //returns The value is out of range

var refError = new ReferenceError('This reference is not valid');
	console.log(refError.message); //returns This reference is not valid

class myCustomError extends Error{
	constructor(message){
		super(message)
	}
}


var myCustomErrorInstance = new myCustomError('This is a Custom Error');
	console.log(myCustomErrorInstance.message);  //retuns This is a Custom Error
	console.log(myCustomErrorInstance.stack);	//returns stack trace

try{
	throw new myCustomError('There has been a mistake')
}catch(e){
	console.log(e.message);  //returns There has been a mistake
	console.log(e.stack); //returns stack trace
}