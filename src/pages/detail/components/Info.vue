<template>
  <div class="baseinfo">
    <div class="info-card border-bottom">
      <!-- 评分 -->
      <div class="card-score">
        <a class="card-link" href="https://touch.piao.qunar.com/touch/getCommentsAndTravelTips.htm?sightId=4126310666&pageSize=10&pageNum=1&fromType=SIGHT"></a>
        <div>
          <span class="score">4.9</span>
          <span class="fen">分</span>
          <span class="level">很棒</span>
        </div>
        <div>
          <span class="card-comment">5657条评论</span>
          <span class="card-tip">5条攻略</span>
          <span class="card-icon iconfont">&#xe62d;</span>
        </div>
      </div>
      <!-- 景点简介 -->
      <div class="card-score">
        <a class="card-link" href="https://touch.piao.qunar.com/touch/getCommentsAndTravelTips.htm?sightId=4126310666&pageSize=10&pageNum=1&fromType=SIGHT"></a>
        <div>
          <span class="card-tit">景点简介</span>
        </div>
        <div>
          <span class="card-time">开放时间、贴士</span>
          <span class="card-icon r0 iconfont">&#xe62d;</span>
        </div>
      </div>
    </div>
    <div class="info-address">
      <p class="address-txt">
        <span class="address-icon iconfont">&#xe63f;</span>
        <span>浙江省杭州市萧山区风情大道2555号休博园内（杭州乐园对面）</span>
        <span class="address-left iconfont">&#xe62d;</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  
}
</script>

<style lang="stylus" scoped>
  .baseinfo
    position relative
    top -.1rem
    padding .1rem .2rem 0 .2rem
    margin-bottom .1rem
    background #ffffff
    border-radius .1rem .1rem 0 0
    .info-card
      padding .1rem 0 .2rem 0
      display flex
      width 100%
      text-align left 
      .card-score
        position relative
        flex 1
        .card-link
          position absolute
          left 0
          top 0
          width 100%
          height 100%
          cursor pointer
        .score
          font-size .44rem
          color #ff8300
          line-height .44rem
        .fen
          font-size .28rem
          color #ff8300
          line-height .48rem
        .level
          font-size .28rem
          color #ff8300
          line-height .48rem
          margin-left .2rem
        .card-comment
          font-size .24rem
          color #9e9e9e
          line-height .32rem
          margin-right .2rem
        .card-tip
          font-size .24rem
          color #9e9e9e
          line-height .32rem
          margin-right .2rem
        .card-icon
          position: absolute;
          top .3rem
          right .2rem
          color #9e9e9e
          font-size .24rem
        .r0
          right 0
        .card-tit
          font-size .28rem
          color #212121
          line-height .48rem
          padding-left .3rem
        .card-time
          font-size .24rem
          color #9e9e9e
          padding-left .3rem
    .info-address
      position relative
      padding .2rem 0 
      line-height .36rem
      color #212121
      .address-txt
        padding 0 .56rem
        position relative
        text-align left
        .address-icon
          display block
          position absolute
          left 0
          top 0
          margin-right .2rem
          color #9e9e9e
          font-size .36rem
        .address-left
          display block
          position absolute
          right 0
          top 50%
          margin-top -.14rem
          color #9e9e9e
          font-size .24rem
</style>
