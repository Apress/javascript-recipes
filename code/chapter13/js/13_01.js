function * helloGenerator(){
	
	yield 'HELLOFRIEND';
}

var sayHello = helloGenerator();
	console.log(sayHello) //returns generator
	//console.log(sayHello.next()) //returns Object
	console.log(sayHello.next().value)  //yield returns HELLOFRIEND
	console.log(sayHello.next().value) //returns undefined