<template>
    <div>
        <detail-banner :sightName='sightName' :bannerImg='bannerImg' :galleryImgs='galleryImgs'></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-info></detail-info>
            <detail-list :list='categoryList'></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
        DetailInfo
    },
    data () {
        return {
           sightName:'',
           bannerImg:'',
           galleryImgs:[],
           categoryList:[]
        }
    },
    methods: {
       getDetailInfo () {
           //路由传对应的ID
           axios.get('/api/detail.json' , {
               params: {
                   id: this.$route.params.id
               }
           }).then(this.handleGetDataSucc)
       } ,
       handleGetDataSucc (res) {
           res = res.data
           if(res.ret && res.data){
               const data = res.data
               this.sightName = data.sightName
               this.bannerImg = data.bannerImg
               this.galleryImgs = data.galleryImgs
               this.categoryList = data.categoryList
            }
       }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
        background #f5f5f5
</style>

