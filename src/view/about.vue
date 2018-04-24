<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
        <child :msg="msg"></child>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "test",
                aboutMsg: '我是about组件'
            }
        }
    }
</script>