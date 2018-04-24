'use strict';

require('./css/main.css');

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _router = require('./router/router.js');

var _router2 = _interopRequireDefault(_router);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// import './css/base.less';
var myVue = new _vue2.default({
	el: "#app",
	router: _router2.default,
	component: { App: _App2.default },
	render: function render(h) {
		return h(_App2.default);
	}
});

// setTimeout(function(){
// 	console.log(98978)
// 	myVue.$router.go("/about");
// },2000)