
function level1(){
	try{
		level2();
	}catch(e){
		console.log('Error in Level 1: ' + e.message); //returns Error in Level 1: Error started in Level 3
		console.log(e.stack);  // returns Error: Error started in Level 3
							  // also shows all the stack infromation
	} 
}

function level2(){
	try{
		level3();
	}catch(e){
		console.log('Error in Level 2: ' + e.message); //returns Error in Level 2: Error started in Level 3
		throw(e)
	}
}

function level3(){
	throw(new Error('Error started in Level 3'));
}

level1();