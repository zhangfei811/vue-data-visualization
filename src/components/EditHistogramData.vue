<template>
 <div>
    <div v-if="dblclickObj !== null">
        标题：
        <el-input v-model="dblclickObj.option.title.text" @change="rederChange(dblclickObj)" :key="'input' + dblclickObj.id"></el-input>
        横坐标：
        <el-input v-for="(xAxis,index) in dblclickObj.option.xAxis.data" 
            v-model="dblclickObj.option.xAxis.data[index]" 
            placeholder="" 
            :key="'xAxis' + index + dblclickObj.id" 
            @change="rederChange(dblclickObj)"></el-input>
        数据坐标值：
        <el-input v-for="(serie,index) in dblclickObj.option.series[0].data" 
            v-model="dblclickObj.option.series[0].data[index]" 
            placeholder="" 
            :key="'series' + index + dblclickObj.id" 
            @change="rederChange(dblclickObj)"></el-input>
    </div>
 </div>
</template>

<script>
 export default {
   components: {

   },
   props: {
     dblclickObj: {
       type: Object,
       default: null,
     }
   },
   data () {
     return {
       
     }
   },
   created () {
   },
   mounted () {
   },
   methods: { 
     rederChange(histogram){
      debugger;
      console.log('====================',histogram);
      // const findHistogram = this.histogramList.find((histogram) => histogram.id === this.dblclickIndex);
      // findHistogram.myChart.setOption(findHistogram.option);
      histogram.myChart.setOption(histogram.option);
    },
   },
 }
</script>

<style scoped lang='scss'>

 
</style>
