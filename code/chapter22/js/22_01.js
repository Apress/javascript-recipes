//export code

export function saveUser(userName){
	var saveObj = new SaveUserData(userName);
		saveObj.save();
}

//class is not exported 

class SaveUserData{
	constructor(userName){
		this.userName = userName;
	}
	save() {
		//saving functions
	}
}


//import code

import {saveUser} from './user-module';
saveUser(userName);