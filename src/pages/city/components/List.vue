<template>
  <div class="list" ref="wrapper">
    <div>
      <!--当前城市-->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <!--热门城市-->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--A城市-->
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState,mapMutations } from 'vuex'
  export default {
    name: 'CityList',
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    computed:{
    //mapState:把vuex中的数据映射到这个组件的computed计算属性里
    ...mapState({
      currentCity:'city'
    })
  },
    methods: {
      //点击切换到选择的城市
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
      mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
      },
      //监听letter改变
      watch: {
        letter() {
          if (this.letter) {
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
          }
        }
      }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    left 0
    top 1.58rem
    right 0
    bottom 0
    .title
      text-align left
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      //触动BFC事件，清除浮动
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        width 33.33%
        float left
        .button
          margin .1rem
          padding .1rem 0
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
        text-align left
</style>
