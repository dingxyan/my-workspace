"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var a = 3;
setTimeout(function () {
	exports.a = a = 10;
}, 2000);
exports.a = a;