<template>
    <div>
        <div class="banner" @click=handleBannerClick>
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1806/14/14d7e1e39f71410fa3.water.jpg_600x330_46681e5b.jpg" alt="" />
            <div class="banner-info">
                <div class="banner-title">
                    杭州烂苹果乐园
                </div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#xe6e5;</span>11
                </div>
            </div>
        </div>
        <common-gallery 
            :imgs='imgs' 
            v-show="showGallery"
            @close='handleGalleryClose'
        ></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name:'banner',
    data(){
        return{
            showGallery:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1806/14/14d7e1e39f71410fa3.water.jpg_r_800x800_87c0c664.jpg','http://img1.qunarzz.com/sight/p0/1806/3e/3ef0017a5092c9f2a3.img.jpg_r_800x800_b4af94a1.jpg','http://img1.qunarzz.com/sight/p0/1704/53/5390149eb3287ef6a3.img.jpg_r_800x800_a8e690bd.jpg']
        }
    },
    components:{
        CommonGallery
    },
    methods:{
        handleBannerClick(){
            this.showGallery=true
        },
        handleGalleryClose(){
            this.showGallery=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                text-align left 
                color #ffffff
                flex 1
                font-size .36rem
                text-shadow 0 1px 2px rgba(0,0,0,0.70)
                padding 0 .2rem
            .banner-num
                height .32rem
                line-height .32rem
                margin .14rem .2rem 0 0
                font-size .24rem
                color #ffffff
                padding 0 .4rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                .banner-icon
                    font-size .24rem
                    margin-right .1rem
</style>        

