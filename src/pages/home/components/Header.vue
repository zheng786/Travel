<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--$store => new Vuex store
        每个子组件都可以用$store,因为在main.js创建根实例的时候，把store传递进去了。
        紧接着store就被派发到每个子组件里面。
        -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
    //mapState:把vuex中的数据映射到这个组件的computed计算属性里
    ...mapState(['city'])
  }
}
</script>

<!--lang:language  意为style样式语言是stylus-->
<!--scoped:使得当前样式只作用于当前组件的节点-->
<style lang="stylus" type="text/stylus" scoped>
  /* 1rem = html font-size = 50px */

  /* 样式中导入样式import前要加一个"@"符号 */
  /* 连接中的"@"指向src这个目录 在样式中想要使用@得在前面加个波浪线*/
  /*@import '~@/assets/styles/varibles.styl'*/

  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #ffffff
      border-radius: .1rem
      color: #ccc
      line-height: .64rem
      margin: .12rem 0 0 .2rem
      height: .64rem
    .header-right
      color #ffffff
      min-width: 1.04rem
      padding:0.1rem
      float: right
      text-align center
      .arrow-icon
        font-size: .24rem

</style>
