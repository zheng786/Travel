import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'

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
    },{
      // 此路径为动态路由
      path: '/detail/:id',
      name:'Detail',
      component:Detail
    }],
    //每次路由切换的时候，这将简单地使页面滚动到所有路线导航的顶部。
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
