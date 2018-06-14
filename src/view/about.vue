<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
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