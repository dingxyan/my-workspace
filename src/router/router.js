import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "../view/home.vue";
import about from "../view/about.vue";

// const home = () => import('../view/home.vue');
// const about = () => import('../view/about.vue');

Vue.use(VueRouter);

const routes = [
	{

		path:"/",
		redirect: "/home"
	},
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    }
]

var router =  new VueRouter({
    mode: "history",// 去掉#号
    routes
})
export default router;