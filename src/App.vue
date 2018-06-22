<template>
  <div id="app">
    <!-- keep-alive:路由的内容被加载过之后，就把路由中内容放到缓存中。
    下次再进这个路由，不需要重新渲染组件。 -->
    <keep-alive>
      <!--router-view 显示的是当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
