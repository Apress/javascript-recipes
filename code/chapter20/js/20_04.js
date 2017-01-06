 

var words = "Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.";
	


var multiLineExpression = /darth|solo/g; 

 
var multiLineResult = multiLineExpression.exec(words);
  
console.log(multiLineResult);  //returns ["darth", index: 9, input: "Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks."]

var groupOfWords = 'cats, bats, dogs, logs, cogs';

var groupRegX = /[cb]ats|[dl]ogs/;

console.log(groupRegX.exec(groupOfWords));  //returns ["cats", index: 0, input: "cats, bats, dogs, logs, cogs"]