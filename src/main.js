import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
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
