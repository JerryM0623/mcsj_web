/**
 * door 页面的所有请求接口
 */

import Axios from '@/utils/Axios.js'

// 获取分类数据
function getDoorSeries(){
    return Axios.get('/commodity/doorCommodity')
}

// 根据 id 查找对应 door 商品数据
function getDoorDataListById(dId,currentPage,limitPage){
    return Axios.get('/commodity/doorByType',{
        params:{
            dId,
            currentPage,
            limitPage
        }
    })
}

// 根据 pageIndex 查找对应 door 商品数据
function getDoorDataListByPageIndex(dId,currentPage,limitPage){
    return Axios.get('/commodity/doorByType',{
        params:{
            dId,
            currentPage,
            limitPage
        }
    })
}

export default {
    getDoorSeries,
    getDoorDataListById,
    getDoorDataListByPageIndex
}