<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="icons"></home-icons>
    <home-recommend :list="recommend"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity:'',
      swiperList:[],
      icons:[],
      recommend:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    //获取后台ajax数据
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      //判断：后端正确的返回了结果而且res里有data 这个内容项
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.icons = data.iconList
        this.recommend = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 使用keep-alive，生命周期函数会多一个activated函数。
  //城市重新选择后，页面不重新渲染。当新选择的城市跟之前的城市不一样，重新发数据请求
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
