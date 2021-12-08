import Axios from "../utils/Axios";

// 获取一整页的数据
function getOnePageNews(currentPageIndex,PageSize){
  return Axios.get('/information/all',{
      params:{
        currentPage:currentPageIndex,
        limitPage:PageSize
      }
  })  
}

// 获取选中的新闻的详细信息
function getNewsDetail(id){
    return Axios.get('/information/media',{
        params:{
            miId:id
        }
    })
}

export default {
    getOnePageNews,
    getNewsDetail
}