
 function checkStarShip(shipName){
	try{
		 if(shipName !== 'Enterprise'){
			throw new Error('Wrong Ship');
		}			
	}catch(e){
		console.log(e);
		console.log('Looking for Enterprise');
	}finally{
		console.log('Continue working with code');
	}
 }

checkStarShip('TARDIS');
//returns 
//Error: Wrong Ship
//Looking for Enterprise
//Continue working with code