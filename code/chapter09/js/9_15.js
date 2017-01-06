var robot1 = {
	type: 'Autobot',
	vehicle: 'Truck'
}

var robot2 = {
	type: 'Autobot',
	vehicle: 'Truck'
}

var robot3 = {
	type: 'Autobot',
	vehicle: 'Truck',
	likes: 'Music'
}

var optimusPrime = Object.freeze(robot1);
	console.log(Object.isFrozen(optimusPrime));  //returns true


var hotRod = Object.seal(robot2);
	console.log(Object.isSealed(hotRod)); //returns true
	
var jazz = Object.preventExtensions(robot3);
	console.log(Object.isExtensible(jazz)); //returns false