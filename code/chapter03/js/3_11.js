// JavaScript Document
var myString = 'abc';
	myString += '\uD83D\uDCD6';
		
		console.log(myString);
	for(var i in myString){
		console.log('Character at position ' + i + ' is ' + myString[i]);
	}