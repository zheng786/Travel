<template>
  <div>
    <!---->
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return{
      //以前首页头部的城市是由外部传递进去的(是通过Ajax后端返给我们的)。现在使用Vuex,city是由前端存储的，不需要后端告诉我们
      // city:'',
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    //获取后台ajax数据
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange (letter) {
      this.letter =letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
