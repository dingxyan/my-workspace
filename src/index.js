import './css/main.css';
// import './css/base.less';
import Vue from 'vue';
import router from "./router/router.js";
import App from './App.vue';





var aa = require('./js/test.js');


Vue.component('child',{
	template: '<div>{{msg}}</div>',
	props:['msg']
});


let myVue = new Vue({
	el: "#app",
	router,
	// render: h => h(App)
	template: '<my-App/>',
  	components: {"my-App":App}
});












