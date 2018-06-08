/*console.log("My first Node application");
console.log("This is fun!@#");

console.log("Hello Node!");
*/
/*for(var i = 0; i <= 1000; i++) {
	if((i & 1) === 0) {
		console.log(i);
	}
}*/


var count = 10;

for(var i = count; i >= 0; i--) {
	var s = "";
	for(var j = 0; j <= i ; j++ ) {
		s +="*"
	}		
	console.log(s);
}