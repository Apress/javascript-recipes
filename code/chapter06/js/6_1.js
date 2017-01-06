// JavaScript Document
var now = new Date(); //returns todays date and time
 console.log(now);
 
//var fluxCapacitorDate = new Date('November 5, 1955'); //returns the date with no time all 0's
var fluxCapacitorDate = new Date('November 5, 1955 03:24:00:00');
console.log(fluxCapacitorDate);
 
var infinityWarDate = new Date(2018, 4, 4);  //returns the date with no time all 0's
console.log(infinityWarDate);
 

var unixTimestamp = Date.now(); // returns numbers representing the current date in milliseconds
console.log(unixTimestamp);