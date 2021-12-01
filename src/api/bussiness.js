import Axios from "../utils/Axios";

function getLectures(currentPageIndex,PageSize){
  return Axios.get('/team/all',{
      params:{
        currentPage:currentPageIndex,
        limitPage:PageSize
      }
  })  
}

export default {
    getLectures
}