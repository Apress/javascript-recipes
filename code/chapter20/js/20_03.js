 

var words = "Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.";
	words += "\nMoff mon darth solo jabba yavin darth. skywalker endor k-3po mon fett binks.";


var multiLineExpression = /(darth\.)/gi; //a match group that includes the period

 
var multiLineResult = multiLineExpression.exec(words);
  
console.log(multiLineResult); //returns ["darth.", "darth.", index: 32, input: "Moff mon darth solo jabba yavin darth. Skywalker e…avin darth. skywalker endor k-3po mon fett binks."]