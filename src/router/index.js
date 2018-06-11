import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 访问根路径
      path: '/',
      // 根路径对应的内容是‘Home’
      name: 'Home',
      // 展示的组件
      component: Home
    },{
      path:'/city',
      name:'City',
      component:City
    }]
})
