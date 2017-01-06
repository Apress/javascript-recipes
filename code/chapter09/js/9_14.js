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
	optimusPrime.type = 'Decepticon'; //silently fails
	console.log(optimusPrime.type);  //returns Autobot


var hotRod = Object.seal(robot2);
	hotRod.vehicle = 'Car'; //value is updated 
	console.log('vehicle = ' + hotRod.vehicle); //returns Car
	
var jazz = Object.preventExtensions(robot3);
	console.log(jazz.likes); //returns Music
	delete jazz.likes;
	console.log(jazz.likes); //returns undefined