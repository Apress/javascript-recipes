var Human = {
	name: 'Luke Skywalker'
}


var person = Object.create(Human, {
	 droid: {value: 'R2-D2'}
	});
var person = Object.setPrototypeOf(person, null);

console.log(person.name);  //returns undefined
console.log(person.droid); //returns R2-D2