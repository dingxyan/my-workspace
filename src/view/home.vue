<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <ul id="nodelist"> 
        <li class="lis">index0</li> 
        <li class="lis">index1</li> 
        <li class="lis">index2</li> 
        <li class="lis">index3</li> 
        <li class="lis">index4</li> 
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                l1:"11111",
                l2:"22222",
                msg: "我是home 组件"
            }
        },
        created(){
            var me = this;
        },
        methods: {
            onTest1(){
                console.log("test1");
            },
            onTest2(){
                console.log("test2");
            }
        }
    }
</script>