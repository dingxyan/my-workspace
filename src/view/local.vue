<template>
	<div>
		<p>局部组件1:{{l1}}</p>
		<p>attrs: {{$attrs}}</p>
		<p>listeners: {{$listeners}}</p>
		<local-sub v-bind="$attrs" v-on="$listeners"></local-sub>
	</div>
</template>
<script>
	import bus from '../bus/bus.js';
	// import localSub from './local_sub.vue';
	export default {
		props:["l1"],
		// components: {
		// 	localSub
		// },
		beforeCreate: function () {
	      this.$options.components.localSub = require('./local_sub.vue')
	    },
		mounted:function(){
			this.receive();
			this.$emit('test1');
			this.$emit('test2');
		},
		inheritAttrs: true,
		methods:{
			receive(){
				bus.$on("data-change",(data)=>{
					console.log("receive change");
				});
			}
		}
	}
</script>