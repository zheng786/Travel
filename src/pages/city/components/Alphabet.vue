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
</template>

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
      }
    },
    data () {
      return{
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
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus=true
      },
      handleTouchMove(e){
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() =>{
            const touchY = e.touches[0].clientY-79
            const index = Math.floor((touchY-this.startY)/20)
            if(index >= 0 && index < this.letters.length){
              this.$emit('change',this.letters[index])
            }
          },16)
        }
      },
      handleTouchEnd(){
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
