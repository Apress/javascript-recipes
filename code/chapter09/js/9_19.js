
var myArray = [10, 20, 30];

for (let value of myArray) {
  console.log(value);  //returns 10, 20, 30
}


var myObj = new Object();
	myObj.name = "Rodd";
	myObj.address = "Brooklyn";
	
for(let value of myObj){
  console.log(value); //returns Uncaught TypeError: myObj[Symbol.iterator] is not a function
}	



