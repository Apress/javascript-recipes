var ipsumString = 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
	ipsumString += 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks. file_record_transcript.pdf';

var groupOfFilesNoExtention = /(.*)\.pdf/;
var groupOfFilesWithExtention = /(.*\.pdf)/;


console.log(groupOfFilesNoExtention.exec(ipsumString)); //returns file_record_transcript
console.log(groupOfFilesWithExtention.exec(ipsumString)); //returns file_record_transcript.pdf
 