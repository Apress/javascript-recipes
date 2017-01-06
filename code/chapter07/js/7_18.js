var albumCollection = [{album:'Hack', artits:'Information Society'}, {album:'Violator', artist:'Depeche Mode'}, {album:'Designation', artist:'The Cure'}];

var foundAlbum = albumCollection.find( function(element, index, array){
	 return element.album == 'Violator'
	})
console.log(foundAlbum); //returns Object {album: "Violator", artist: "Depeche Mode"}

var foundIndex = albumCollection.findIndex( function(element, index, array){
		 return element.album == 'Violator'
	});
	console.log(foundIndex); //returns 1