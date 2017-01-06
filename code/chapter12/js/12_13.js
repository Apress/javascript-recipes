
//ES 5 
document.getElementById('myButton').addEventListener('click', function(){
	var self = this;
	self.currentInterval = 0;
	setInterval(function myInterval(){
		self.currentInterval++;
	}, 1000);
});


//ES 6
document.getElementById('myButton').addEventListener('click', () => {
	this.currentInterval = 0;
	setInterval(() => {this.currentInterval++;}, 1000);
});


//retuning object literals
var myObj = () =>  ({name:'June'}) ;
console.log(myObj()); //returns Object {name: "June"}