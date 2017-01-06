var ipsumString = 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
	ipsumString += 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';

var startAnchor = /^M/;
var multiLineAnchor = /^M/m;
var endOfLineAnchor = /binks.$/gm;
var firstInstanceAnchor = /\ar/;
var startOrEndAnchor = /^darth|binks.$/;

console.log(startAnchor.exec(ipsumString)); //returns M
console.log(multiLineAnchor.exec(ipsumString)); //returns M
console.log(endOfLineAnchor.exec(ipsumString)); //returns binks.
console.log(firstInstanceAnchor.exec(ipsumString)); //returns ar
console.log(startOrEndAnchor.exec(ipsumString)); //returns binks.