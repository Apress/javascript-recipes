var robot1 = {
	type: 'Autobot',
	vehicle: 'Truck'
}

console.log(Object.is(robot1, robot1)); //returns true
console.log(Object.is(0, false)); //returns false
console.log(Object.is(-0, +0)); //returns false
console.log(Object.is(NaN, NaN)); //returns true
