var date1 = new Date('6/15/2016');
var date2 = new Date('6/19/2016');

// 86,400,000 milliseconds is the number of milliseconds in one day
var oneDayInMS = 1000 * 60 * 60 * 24;

// Calculate the difference in milliseconds
var differenceInMS = Math.abs(date1.getTime() - date2.getTime());

var days = Math.round(differenceInMS/oneDayInMS);

console.log(days);
