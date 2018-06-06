import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
=======

Vue.config.productionTip = false
>>>>>>> bd28540ddcaa4544ee41c99ad82736abac04e1b1

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
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
=======
  render: h => h(App)
>>>>>>> bd28540ddcaa4544ee41c99ad82736abac04e1b1
})
