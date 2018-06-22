let defaultCity = '杭州'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
} catch(e){}

export default{
    // city的值优先从localStorage.city中取，取不到再用默认的“杭州”
    city:defaultCity
}