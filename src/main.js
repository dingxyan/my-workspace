import './css/main.css';
// import './css/base.less';
import Vue from 'vue';

var aa = require('./js/test.js');


Vue.component('child',{
	template: '<div>{{msg}}</div>',
	props:['msg']
});

Vue.component('my-comp',{
	template:'<div><input v-model="msg1"><child :msg="msg1"></child></div>',
	data: function(){
		return {
			msg1:"asd"
		};
	}
});

let myVue = new Vue({
	el: "#myvue",
	template: '<my-comp></my-comp>'
});

Vue.component('my-comp2',{
	template: '<span></span>'
});

function dedupe(arr) {
	return Array.from(new Set(arr));
}

var arr = dedupe([1,2,3,1,2,3]);
console.log(arr);









