document.addEventListener('DOMContentLoaded', function(){
      console.log('content loaded');
});
	
(function(){
     console.log('running closure');
})();

var greeting = function(name){
    return 'Hello ' + name;
};
greeting('Jenny');
