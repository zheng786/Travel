<template>
    <div class="container" @click=handleGalleryClick>
        <div class="wrapper">
            <swiper :options='swiperOptions'>
                <!-- slides -->
                <swiper-slide 
                    v-for='(item,index) in imgs' 
                    :key='index'
                >
                    <img class="gallery-img" :src="item" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    props:{
        imgs:{
            type:Array,
            default () {
                return []
            }
        }
    },
    data () {
        return{
            swiperOptions: {
                pagination:'.swiper-pagination',
                paginationType : 'fraction',
                //将observe应用于Swiper的父元素。当Swiper元素发生DOM结构变化时，例如window.resize，Swiper更新。
                observer:true,
                observeParents:true,
            }    
        }
    },
    methods:{
        handleGalleryClick(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit 
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 20
        position fixed
        left 0
        top 0
        right 0
        bottom 0
        background #000
        .wrapper
            height 0
            width 100%
            padding-bottom 50%
            .gallery-img
                width  100%
            .swiper-pagination
                color #ffffff
                bottom -2rem

</style>
