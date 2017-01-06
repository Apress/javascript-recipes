var ship = {};
var type = 'spaceShip';
ship[type] = 'X-Wing';

console.log(ship[type]); //returns X-Wing
console.log(ship.spaceShip);  //returns X-Wing
console.log(ship.type);  //returns undefined