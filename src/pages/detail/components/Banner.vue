<template>
    <div>
        <div class="banner" @click=handleBannerClick>
            <img class="banner-img" :src="bannerImg" alt="" />
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#xe6e5;</span>
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallery 
                :imgs='galleryImgs' 
                v-show="showGallery"
                @close='handleGalleryClose'
            ></common-gallery>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name:'banner',
    props:{
        sightName: String,
        bannerImg: String,
        galleryImgs: Array 
    },
    data(){
        return{
            showGallery:false,
        }
    },
    components:{
        CommonGallery,
        FadeAnimation
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

