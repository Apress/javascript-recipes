var currentDate = new Date();
var offSet = currentDate.getTimezoneOffset() / 60;
//console.log(offSet);


var today = new Date();
function isDST(){
	var jan = new Date(today.getFullYear(), 0, 1);
	var jul = new Date(today.getFullYear(), 6, 1);
	return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}
console.log(isDST());
console.log(today.getTimezoneOffset());
if(isDST() != today.getTimezoneOffset()){
	console.log('On DST');	
}else{
	console.log('Not DST');	
}