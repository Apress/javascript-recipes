//regular expression with flags

var words = `Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.`;
	words += `\nMoff mon darth solo jabba yavin darth. skywalker endor k-3po mon fett binks.`;


var multiLineExpression = /(Skywalker)/gi; //a match group that is global and ignores case

 
var multiLineResult = multiLineExpression.exec(words);
  
console.log(multiLineResult);