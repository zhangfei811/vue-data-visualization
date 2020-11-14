import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataVisualization: {
      dataEcharts: {
        histogram : [], // 柱状图数组
        histogramIndex : 0, // 当前柱状图索引
        pie : [], // 饼状图数组
        pieIndex : 0, // 饼状图索引
      },
      dataBase: { // 后期补充基础元素的拖拽

      }
    }
  },
  getters: {
    getDataEchartsItem: (state) => ({type= 'histogram',id = null } = {}) => {
      if(id === null) return {};
      return state.dataVisualization.dataEcharts[type].find(item => item.id === id);
    },
    getDataEchartsIndex: (state) =>({type= 'histogram'} = {}) => {
      return state.dataVisualization.dataEcharts[type+'Index'];
    },
  },
  mutations: {
    addDataEchartsItem(state,{type = 'histogram',option = 'option'} = {}){
      state.dataVisualization.dataEcharts[type].push(option);
    },
    addDataEchartsIndex(state,{type = 'histogram'} = {}){
      state.dataVisualization.dataEcharts[type+'Index'] += 1;
    }
  },
  actions: {},
  modules: {}
});
