import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  //state:存放的是全局公用的数据
  //state: state,
  state,
  /*切换城市并没有异步操作，而且操作也非常简单不是些批量数据操作。
  这时候组件没必要调用actions作为一个转发，直接调用mutations就可以了
  */
  // actions:{
  //   changeCity(ctx,city){
  //     ctx.commit('changeCity',city)
  //   }
  // },
  //mutations:mutations
  mutations,

})
