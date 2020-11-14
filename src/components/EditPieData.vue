<template>
 <div>
   <div v-if="dblclickObj !== null">
        图例：
        <el-input v-for="(xAxis,index) in dblclickObj.option.legend.data" 
            v-model="dblclickObj.option.legend.data[index]" 
            placeholder="" 
            :key="'legend' + index + dblclickObj.id" 
            @change="rederChange(dblclickObj)" @input="changLegend(dblclickObj,index)"></el-input>
        数据坐标值：
        <el-input v-for="(serie,index) in dblclickObj.option.series[0].data" 
            v-model="dblclickObj.option.series[0].data[index].value" 
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
    changLegend(pie,index){
      debugger;
      pie.option.series[0].data[index].name = pie.option.legend.data[index];
    },
    rederChange(pie){
      debugger;
      console.log('====================',pie);
      // const findHistogram = this.histogramList.find((histogram) => histogram.id === this.dblclickIndex);
      // findHistogram.myChart.setOption(findHistogram.option);
      pie.myChart.setOption(pie.option);
    },
   },
 }
</script>

<style scoped lang='scss'>

 
</style>
