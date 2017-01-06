//regular expression literals

var companyBio = 'Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets".';
var simplePattern = /(twitter)/gi;

var simplePatternConstructor = new RegExp(simplePattern);
console.log(simplePatternConstructor.exec(companyBio));  //returns array with the first element being the word ‘Twitter’