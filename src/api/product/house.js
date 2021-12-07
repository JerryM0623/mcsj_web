/**
 * house 页面的所有请求接口
 */
import Axios from '@/utils/Axios.js'

//  获取房的所有类型
function getHouseSeries() {
    return Axios.get('/commodity/roomCommodity')
}

// 通过 id 或者 pageIndex 获取商品数据
function getHouseDataListByIdOrPageIndex(rId,currentPage,limitPage){
    return Axios.get('/commodity/roomByType',{
        params:{
            rId,
            currentPage,
            limitPage
        }
    })
}

// 根据 hid 获取详细信息
function getHouseGoodsDetail(hid){
    return Axios.get('/commodity/roomParameter',{
        params:{
            rpId:hid
        }
    })
}

export default {
    getHouseSeries,
    getHouseDataListByIdOrPageIndex,
    getHouseGoodsDetail
}