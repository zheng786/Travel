<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data () {
    return{
      swiperOption:{
        //页码
        pagination:'.swiper-pagination',
        //循环
        loop: true
      },
      swiperList:[{
        id:'001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
      },{
        id:'002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
      },{
        id:'003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  /*
  因为 scoped 属性的限制，可能会存在修改外部引入的组件的样式无法修改的情况！
  以swiper组件为例，我们在这个时候需要使用 =>  样式穿透>>>
  */
  .wrapper >>> .swiper-pagination-bullet-active
    background:#ffffff
  .wrapper
    width: 100%
    /*height: 26.67vw  这种写法兼容性不好*/
    height: 0
    overflow:hidden
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width:100%
</style>
