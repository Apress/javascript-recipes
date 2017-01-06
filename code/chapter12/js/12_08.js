function es5GetName(myObj){
	var name = myObj.name;
	console.log(name);
}

es5GetName({name: 'Bruce Banner'});


function getName({name}){
	console.log(name);
}

getName({name: 'Bruce Banner'}); //returns Bruce Banner