<template>
  <div class="weekend">
    <h2 class="weekend-title">周末去哪儿</h2>
    <div class="weekend-list">
      <div class="weekend-item" v-for="item of list" :key="item.id">
        <a class="weekend-link">
          <div class="img-w">
            <img class="weekend-img" :src="item.imgUrl" />
          </div>
          <div class="weekend-info">
            <p class="weekend-name">{{item.name}}</p>
            <p class="weekend-desc">{{item.desc}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    props:{
      list:Array
    },
    data () {
      return{
        // weekendList:[{
        //   id:'001',
        //   imgUrl:'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        //   name:'杭州必游TOP10',
        //   desc:'杭州，前世今生与你有一场美丽约会'
        // },{
        //   id:'002',
        //   imgUrl:'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        //   name:'承载杭城的历史之地',
        //   desc:'饱经沧桑的地方诉述着这座城的段段衷肠'
        // },{
        //   id:'003',
        //   imgUrl:'http://img1.qunarzz.com/sight/source/1505/bc/83feb2e003d0dd.jpg_r_640x214_0b7269b8.jpg',
        //   name:'杭州多样乐园',
        //   desc:'这个周末终于可以陪宝贝去玩耍啦'
        // },{
        //   id:'004',
        //   imgUrl:'http://img1.qunarzz.com/sight/source/1507/61/a7564da6033311.jpg_r_640x214_cc570e76.jpg',
        //   name:'激情漂流，嗨翻夏日',
        //   desc:'漂起来，展现你的“湿身”诱惑'
        // },{
        //   id:'005',
        //   imgUrl:'http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg',
        //   name:'美仑美奂的演出',
        //   desc:'一座有故事的城，天天有“戏”在上演'
        // }]
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/mixins.styl'
  .weekend-title
    padding-left .26rem
    height: .9rem
    line-height .8rem
    color #212121
    text-align left
  .weekend-list
    height 20.5rem
    .weekend-item
      margin-bottom .1rem
      position relative
      .weekend-link
        display block
        height 100%
        width 100%
        .img-w
          height 2.8rem
          .weekend-img
            height  100%
        .weekend-info
          padding .14rem .2rem .2rem .2rem
          min-width 0
          .weekend-name, .weekend-desc
            text-align left
            padding-right 1.4rem
            color #212121
            font-size .28rem
            line-height .48rem
            ellipsis()
          .weekend-desc
            color #616161
</style>
