import './css/main.css';
// import './css/base.less';
import Vue from 'vue';
import router from "./router/router.js";
import App from './App.vue';





var aa = require('./js/test.js');


// Vue.component('child',{
// 	template: '<div>{{msg}}</div>',
// 	props:['msg']
// });

// Vue.component('my-comp',{
// 	template:'<div><input v-model="msg1"><child :msg="msg1"></child></div>',
// 	data: function(){
// 		return {
// 			msg1:"asd"
// 		};
// 	}
// });

let myVue = new Vue({
	el: "#app",
	router,
	render: h => h(App)
});












