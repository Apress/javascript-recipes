function SuperHeroTeam() {
  this.name = 'The Avengers';
  var _numberOfMembers; // private member
  Object.defineProperty(this,"numberOfMemebers",{
    get: function() { return _numberOfMembers; },
    set: function(value) { _numberOfMembers = value; }
  });
  
  Object.defineProperty(this,"tagline",{
	value: 'Earth\'s Mightiest Heroes',
	configurable: false
  });  
}

var team = new SuperHeroTeam();
Object.getOwnPropertyNames(team).forEach(function(val){
	console.log(val); // returns name. numberOfNames, tagline
});


