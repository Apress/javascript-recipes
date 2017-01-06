function countdown(stringLiteralArray, ...values){
	console.log(stringLiteralArray); //returns full array
	console.log(stringLiteralArray[1]); //returns Mississippi

	
	console.log(values); //returns array of values
	console.log(values[0]);  //returns 1
	console.log(values[1]);  //returns 2
	 
	let fullSentance = values[0] + stringLiteralArray[1] + values[1] + stringLiteralArray[2]; 
	return fullSentance;
	
}

let one = 1;
let two = 2;


let results = countdown `${one} Mississippi ${two} Mississippi`;
console.log(results); //returns 1 Mississippi 2 Mississippi