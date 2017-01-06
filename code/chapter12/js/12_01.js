//function constructor

var fun1 = new Function('name', 'return name;');
	fun1('Jessica');


//function declaration
function myFun(name){
	var greeting = 'Hello ' + name;
	return greeting;
}

myFun('Danny');


//function expression
var fun3 = function(name) { 
	return name;
}

fun3('Mami');
	