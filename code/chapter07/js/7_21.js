document.addEventListener('DOMContentLoaded', function(){
document.querySelector('#fileInput').addEventListener('change', getFileInfo);
var fileReader = new FileReader();
	fileReader.addEventListener('load', showBuffer);

function getFileInfo(e){
	fileReader.readAsArrayBuffer(e.target.files[0]);
};

function showBuffer(e){
	var bytes = new Uint8Array(e.target.result);
	console.log(bytes[0]);
	console.log(bytes[1]);

}
	
});