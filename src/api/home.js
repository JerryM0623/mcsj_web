import Axios from "../utils/Axios";

function getCarousel(){
  return Axios.get('/index/RotationOne')  
}
function getThreeNews(currentPageIndex,PageSize){
  return Axios.get('/information/all',{
      params:{
        currentPage:currentPageIndex,
        limitPage:PageSize
      }
  })  
}

export default {
  getCarousel,
  getThreeNews
}