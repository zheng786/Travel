<template>
  <div class="list">
    <div 
      class="item" 
      v-for='(item,index) of list' 
      :key='index'
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  //递归组件
  //组件给他一个名字，是为了使用递归组件。当一个组件要用自己的时候，组件就可以通过使用自己的名字使用自己
  name:'DetailList',
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
  .list
    background #ffffff
    .item-title
      line-height .8rem
      font-size .32rem
      padding 0 .2rem
      text-align left 
      .item-title-icon
        display: inline-block;
        width .32rem
        height: .32rem;
        line-height: .32rem;
        background url(https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png) no-repeat
        margin-right .1rem
        background-size .3rem .32rem
    .item-children
      padding 0 .3rem
</style>
