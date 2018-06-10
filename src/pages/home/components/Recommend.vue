<template>
  <div>
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
      <span class="like">猜你喜欢</span>
    </div>
    <ul class="like-list">
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <a href="#" class="item-link">
          <div class="item-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <div class="item-tit">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
            <div class="item-price">{{item.price}}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return{
      recommendList:[{
        id:'0001',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1801/66/665b245a7ca8728a3.img.jpg_200x200_88d144ad.jpg',
        title:'杭州烂苹果乐园',
        desc:'5577条评论',
        price:'￥140起'
      },{
        id:'0002',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_200x200_ead93bcd.jpg',
        title:'宋城千古情',
        desc:'14711条评论',
        price:'￥245起'
      },{
        id:'0003',
        imgUrl:'http://img1.qunarzz.com/sight/p0/201408/14/771e7f0a85ca13b12c3fde0f7739440f.jpg_200x200_5e08c104.jpg',
        title:'杭州乐园',
        desc:'4441条评论',
        price:'￥120起'
      },{
        id:'0004',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_200x200_22a0790e.jpg',
        title:'杭州野生动物园',
        desc:'4794条评论',
        price:'￥170起'
      },{
        id:'0005',
        imgUrl:'http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg',
        title:'杭州海底世界',
        desc:'6464条评论',
        price:'￥115起'
      },{
        id:'0006',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg',
        title:'双溪竹海漂流',
        desc:'6464条评论',
        price:'￥110起'
      },{
        id:'0007',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1603/33/337b483a8f5e76fb90.water.jpg_200x200_8f62ff4e.jpg',
        title:'瑶琳仙境',
        desc:'6464条评论',
        price:'￥109起'
      },{
        id:'0008',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1603/18/18ae748f826c5abe90.water.jpg_200x200_67503119.jpg',
        title:'大明山',
        desc:'6464条评论',
        price:'￥91.4起'
      }]
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .title
    padding .24rem 0 .26rem
    margin-top .2rem
    position relative
    text-align left
    .title-img
      width .3rem
      height .3rem
      margin-left .2rem
      vertical-align top
    .like
      margin-left .08rem
      height .44rem
      color #212121
      font-size .32rem
      line-height .44rem
  .like-list
    height 19.2rem
    margin-left .24rem
    list-style none
    .item
      padding .2rem 0
      position relative
      overflow hidden
      .item-link
        display flex
        .item-wrapper
          float left
          height 2rem
          width 2rem
          .item-img
            width 100%
        .item-info
          text-align left
          overflow hidden
          padding-left .22rem
          .item-tit
            margin-top: .26rem
            height .44rem
            color #212121
            font-size .32rem
            line-height .44rem
          .item-desc
            margin-top: .14rem
            height .34rem
          .item-price
            margin-top .22rem
            color #616161
            font-size .24rem
            line-height .4rem


</style>
