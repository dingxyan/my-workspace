<template>
	<div>
		<div>局部组件2:{{l2}}</div>
		<button @click="toChange"></button>
	</div>
</template>
<script>
	import bus from '../bus/bus.js';
	export default {
		props:["l2"],
		data(){
			return{
				dd:"toLocal1"
			}
		},
		methods:{
			toChange(){
				console.log(999)
				bus.$emit("data-change",this.dd);
			}
		}
	}
</script>