var Human = {
	name: 'Luke Skywalker'
}

var person = Object.create(Human, {
	 droid: {value: 'R2-D2'}
	});
console.log(person.name);  //returns Luke Skywalker from the prototype
console.log(person.droid); //returns R2-D2