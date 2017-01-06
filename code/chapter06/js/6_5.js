var date1 = new Date("March 19, 1990 03:30:00");
var date2 = new Date("March 19, 1990 04:30:00");


 console.log(date1.getTime()); //returns 637835400000
  console.log(date2.getTime()); //returns 637839000000

if(date1.getTime() == date2.getTime()){
	console.log('date are the same');	
}else{
	console.log('dates are different');	
}
