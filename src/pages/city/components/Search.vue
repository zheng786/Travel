<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li v-show="noData"  class="search-item border-bottom">
            没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapMutations} from 'vuex'
  export default {
    name:'CitySearch',
    props:{
      cities:Object
    },
    data () {
      return{
        keyword:'',
        list:[],
        //节流函数
        timer:null
      }
    },
    methods: {
      handleCityClick(city) {
        //dispatch:调度 调用Actions
        //这里没有调用Actions 原因见store/index.js
        // this.$store.commit('changeCity', city)
        this.changeCity(city)
        //改变城市后跳转回首页
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed:{
      noData(){
        return !this.list.length
      }
    },
    watch:{
      //监听用户的输入内容
      keyword(){
        if(this.timer){
          clearTimeout(this.timer)
        }
        //如果this.keyword不存在，返回一个空数组
        if(!this.keyword){
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if(value.spell.indexOf(this.keyword) == 0 || value.name.indexOf(this.keyword) == 0){
                result.push(value)
              }
            })
          }
          this.list = result
        },100)
      }
    },
    mounted () {
      //传入一个DOM元素或则选择器
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      text-align left
      line-height .62rem
      padding-left .2rem
      color #666
      background #ffffff
</style>
