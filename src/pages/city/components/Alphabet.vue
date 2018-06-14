<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleClick"
    >
      {{item}}
    </li>
  </ul>
</template>0

<script>
  export default {
    name:'CityAlphabet',
    props:{
      cities:Object
    },
    computed:{
      letters () {
        const letters = []
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      //  ['A','B','C'.......]
      }
    },
    data () {
      return{
        //标识位
        touchStatus:false,
        //提高性能
        startY:0,
        //节流，限制函数执行的频率从而提高网页的性能
        timer:null
      }
    },
    updated(){
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
      handleClick(e){
        //点击字母向外触发事件，City.vue来监听这个事件
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        //开始滑动
        this.touchStatus=true
      },
      handleTouchMove(e){
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() =>{
            //touches[0]  当前位于屏幕上的所有手指的一个列表。手指的信息      79：城市选择标题和搜索框高度
            const touchY = e.touches[0].clientY-79
            //  index:字母下标    算出手指位于哪个字母
            const index = Math.floor((touchY-this.startY)/20)
            if(index >= 0 && index < this.letters.length){
              //滑动字母向外触发事件，City.vue来监听这个事件
              this.$emit('change',this.letters[index])
            }
          },16)
        }
      },
      handleTouchEnd(){
        //结束滑动
        this.touchStatus =false
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      color $bgColor
</style>
