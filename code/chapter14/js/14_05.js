var str = `Today is ${getToday()}`;

function getToday(){
	var myDate = new Date();
	return	myDate.getMonth() +'/' + myDate.getDate() + '/' + myDate.getFullYear();
}

console.log(str);