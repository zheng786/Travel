import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
/*创建根VUE实例*/
new Vue({
  el: '#app',
  router,
  store,
  // components: { App }  vue1.0的写法

  // vue2.0的写法
  render: h => h(App)

//   等价于
//
//     {
//       render: function(h) {
//         return h(App);
//       }
//     }
//   即：
//
// {
//   render: function(createElement) {
//     return createElement(App);
//   }
// }
})
