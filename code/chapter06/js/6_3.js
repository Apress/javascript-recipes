// JavaScript Document
var dob = new Date("12/3/1979");
var today = new Date();
var years = today.getFullYear() - dob.getFullYear();

dob.setFullYear(today.getFullYear());
console.log(dob);

if(today < dob){
	years--;	
}
console.log(years);
