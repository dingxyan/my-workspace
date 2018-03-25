import './css/main.css';
import './css/base.less';
import Vue from 'vue';

const greeter = require("./js/Greeter.js");
function test(){
	let a = 1;
	console.log(a,4)
	document.getElementById("greeter").appendChild(greeter());
}
test();

new Vue({
	el: "#myvue",
	data: {
		test:1
	}
});