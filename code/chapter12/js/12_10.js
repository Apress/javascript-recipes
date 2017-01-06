
console.log(this); //returns Window

function globalFunction(){
	return this;
}

console.log(globalFunction()); //returns Window

console.log(window.globalFunction());

function globalStrictFunction(){
	'use strict'
	return this;
}

console.log(globalStrictFunction());
console.log(window.globalStrictFunction());


function saySomething(){
	return this.something;
}

var phrase = saySomething.bind({something: 'Brothers! Sisters!'});


console.log(saySomething()); //returns undefine
console.log(phrase());  //returns Brothers! Sisters!

function useCallFunction(){
	return this.greeting;
}

var greetingObj = {greeting: 'Hello, Mr. Robot'};

console.log(useCallFunction.call(greetingObj));
console.log(useCallFunction.apply(greetingObj));

document.getElementById('myButton').addEventListener('click', function(e){
	console.log(this); //<button id="myButton">Click Me</button>
});

var globalArrayFunction = () => this;
console.log(globalArrayFunction());  //returns Window

var micCheck = {
	isThisOn: function(){
		return (() => this);
	}
}

var returnedFunction = micCheck.isThisOn();
console.log(returnedFunction()); //returns Object


var theNumber = {p: 42};
function magicNumber(){
	return this.p;
}

theNumber.theMagicNumber = magicNumber;
console.log(theNumber.theMagicNumber()) //returns 42