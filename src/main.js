import './css/main.css'

const greeter = require("./js/Greeter.js");
function test(){
	let a = 1;
	console.log(a,1)
	document.getElementById("greeter").appendChild(greeter());
}
test();