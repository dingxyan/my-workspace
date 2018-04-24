<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <local-com></local-com>
    </div>
</template>
<script>
    import localCom from "./local.vue";
    export default {
        components: {
            localCom
        },
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>