var myObj = {
	prop1: 0,
	prop2: 1
};

Object.observe(myObj, function(change){
	console.log(change);
});

myObj.thing1 = 'My first thing';

