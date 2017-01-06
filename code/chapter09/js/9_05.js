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
team.numberOfMemebers = 8;
console.log(team.numberOfMemebers);

team.tagline = 'The Amazing'; //not editable
console.log(team.tagline);  // returns Earth's Mightiest Heroes