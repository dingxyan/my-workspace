<template>
    <el-table
      :data="testTableData.data"
      style="width: 100%">
      <el-table-column v-for="item in testTableData.data" :prop="item.prop" :label="item.label"></el-table-column>
    </el-table>
</template>


<script>
  console.log(8888)
  export default {
    props: ["testTableData"],
    data(){
      return {}
    },
    computed:{
      renderTable(){
        console.log(7777)
        return this.testTableData.data || [];
      }
    },
    mounted() {
      console.log(9999,this.renderTable)
    }
  };
</script>

