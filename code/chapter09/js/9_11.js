var person = {firstName: 'Rick Hunter', born:'October 22, 1990'};
var creature = {species: 'Human', gender:'Male', eyes:'Blue', hair:'Black'};

var character = Object.assign(person, creature);
console.log(character); //returns Object {firstName: "Rick Hunter", born: "October 22, 1990", species: "Human", gender: "Male", eyes: "Blue"…}