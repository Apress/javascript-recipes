var ipsumString = 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
	ipsumString += 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';

var greedyQuantifier = /b+/;
var docileQuantifier = /.*k-/;
var lazyQuantifier = /jabba*?/;
var helpfulQuantifier = /.*?yavin/;


console.log(greedyQuantifier.exec(ipsumString)); //returns bb from the first instance of jabba
console.log(docileQuantifier.exec(ipsumString)); //returns Moff mon darth solo jabba yavin darth. Skywalker endor k-
console.log(lazyQuantifier.exec(ipsumString)); //returns jabb
console.log(helpfulQuantifier.exec(ipsumString)); //returns Moff mon darth solo jabba yavin
