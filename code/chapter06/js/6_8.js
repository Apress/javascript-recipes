var startDate = new Date('2/5/1990');
var endDate = new Date('3/25/2013');

var selectedDate = new Date('12/3/2000');

if(selectedDate.getTime() > startDate.getTime() && selectedDate.getTime() < endDate.getTime()){
	console.log('In the range');	
}else{
	console.log('Not in the range');	
}
