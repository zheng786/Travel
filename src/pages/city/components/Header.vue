<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name:'City'
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    height .86rem
    line-height .86rem
    color #ffffff;
    background $bgColor
    font-size .32rem
    .header-icon
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
      color #ffffff
</style>
