import Axios from "../utils/Axios";

function getOnePageNews(currentPageIndex,PageSize){
  return Axios.get('/information/all',{
      params:{
        currentPage:currentPageIndex,
        limitPage:PageSize
      }
  })  
}

export default {
    getOnePageNews
}