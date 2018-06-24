<template>
    <div>
        <router-link 
            tag="div" 
            to="/"
            class="header-abs"
            v-show='showAbs'
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show='!showAbs'
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll () {
            const top = document.documentElement.scrollTop
            if(top > 50){
                let opacity = top / 130
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated () {
        //因为对window这个全局对象做了一个事件绑定，所有内外部组件都会有影响
        window.addEventListener('scroll',this.handleScroll)
    },
    //所以，需要对全局事件解绑
    //deactivated生命周期函数(keep-alive提供):页面即将被隐藏或者页面即将被替换成新的页面时执行
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header-abs
        position absolute
        left .1rem
        top .1rem
        width .72rem
        height .72rem
        line-height .72rem
        border-radius .36rem
        background rgba(0,0,0,.6)
        .header-abs-back
            color #ffffff
            font-size .36rem
    .header-fixed
        position fixed
        top 0 
        left 0
        right 0
        height .86rem
        line-height .86rem
        color #ffffff;
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            font-size .4rem
            color #ffffff
</style>
