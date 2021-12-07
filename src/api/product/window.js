/**
 * window页面的所有请求api
 */
 import Axios from '@/utils/Axios.js'

//  获取窗系列的所有分类信息
function getWindowSeries(){
    return Axios.get('/commodity/windowsCommodity')
}

// 根据 id 获取窗系列的商品数据
function getWindowDataById(wId,currentPage,limitPage){
    return Axios.get('/commodity/windowsByType',{
        params:{
            wId,
            currentPage,
            limitPage
        }
    })
}

// 请求对应的页码的数据
function getWindowDataByPageIndex(currentPage,wId,limitPage){
    return Axios.get('/commodity/windowsByType',{
        params:{
            wId,
            currentPage,
            limitPage
        }
    })
}

// 根据id获取商品详细信息
function getWindowGoodsDetail(wid){
    return Axios.get('/commodity/windowParameter',{
        params:{
            wpId:wid
        }
    })
}

 export default {
     getWindowSeries,
     getWindowDataById,
     getWindowDataByPageIndex,
     getWindowGoodsDetail
     
 }