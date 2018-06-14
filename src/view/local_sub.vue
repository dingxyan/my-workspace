<template>
	<div>
		<p>sub组件：{{$attrs}}</p>
		<p>props: {{l2}}</p>
		<local-test></local-test>
	</div>
</template>
<script>
	import localTest from './local.vue';
	export default {
		props:["l2"],
		components: {
			localTest
		},
		mounted:function(){
			this.$emit('test1');
			this.$emit('test2');
		},
		inheritAttrs: false,
	}
</script>