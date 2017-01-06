// JavaScript Document

console.log(d3.format('%')(1)); // returns 100%
console.log(d3.format(',')(1000000)); //returns 1,000,000
console.log(d3.format("$,")(1250)); //returns $1,250
console.log(d3.format("$,.2f")(1250));  //returns $1,250.00
console.log(d3.time.format('%Y-%m-%d').parse('1975-08-19'));
//returns Tue Aug 19 1975 00:00:00 GMT-0400 (EDT)

console.log(new Intl.NumberFormat().format(45000));   // returns 45,000
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(45000));
// returns ￥45,000

console.log(new Intl.DateTimeFormat('ja-JP', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(1975, 07, 19))); //returns 1975年8月19日火曜日
console.log(new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(1975, 07, 19))); // returns Tuesday, August 19, 1975
