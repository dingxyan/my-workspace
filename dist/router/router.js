"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require("vue-router");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = require("../view/home.vue");

var _home2 = _interopRequireDefault(_home);

var _about = require("../view/about.vue");

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const home = () => import('../view/home.vue');
// const about = () => import('../view/about.vue');

// 引入组件
_vue2.default.use(_vueRouter2.default);

var routes = [{

    path: "/",
    redirect: "/home"
}, {
    path: "/home",
    component: _home2.default
}, {
    path: "/about",
    component: _about2.default
}];

var router = new _vueRouter2.default({
    mode: "history", // 去掉#号
    routes: routes
});
exports.default = router;