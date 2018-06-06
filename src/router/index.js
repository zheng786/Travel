import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/pages/home/Home'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> bd28540ddcaa4544ee41c99ad82736abac04e1b1

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      // 访问根路径
      path: '/',
      // 根路径对应的内容是‘Home’
      name: 'Home',
      // 展示的组件
      component: Home
=======
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> bd28540ddcaa4544ee41c99ad82736abac04e1b1
    }
  ]
})
