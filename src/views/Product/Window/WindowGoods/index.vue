<template>
    <div class="window-goods">
        <ProductDetailTop
            :imgUrl='modelOne.wpImg'
            :imgAlt='modelOne.wpName'
            :name='modelOne.wpName'
            :topDescribeArr='topDescribeArr'
        ></ProductDetailTop>
        <ProductDetailMiddle :middleDescribeArr='middleDescribeArr'></ProductDetailMiddle>
        <ProductDetailBottom :bottomDescribrArr='bottomDescribrArr' :imgUrl='modelThree.wpImgDetails' :imgAlt='modelThree.wpImgDetailsUid'></ProductDetailBottom>
    </div>
</template>

<script>
import ProductDetailTop from '@/components/ProductDetailTop/index.vue'
import ProductDetailMiddle from '@/components/ProductDetailMiddle/index.vue'
import ProductDetailBottom from '@/components/ProductDetailBottom/index.vue'

import handleGoodsDetail from '@/utils/goods.js'

export default {
    name:'WindowGoods',
    props:{
        changeListStatus:{
            type:Function,
            required:true
        }
    },
    components:{
        ProductDetailTop,
        ProductDetailMiddle,
        ProductDetailBottom
    },
    data(){
        return{
            modelOne:{},
            modelThree:{},
            // top 区域的 describe 数组
            topDescribeArr:[],
            // middle 区域的 describe 数据
            middleDescribeArr:[],
            // bottom 区域的 describe 数据
            bottomDescribrArr:[]
        }
    },
    mounted(){
        // 更新ui
        this.changeListStatus(false)
        // 请求数据
        const wid = this.$route.params.id
        this.$api.product.window.getWindowGoodsDetail(wid).then(res => {
            // 这个函数实现数据的二次改造和 data 的更新
            handleGoodsDetail(0,res.data,this)
        })
        
    },
    beforeDestroy(){
        this.changeListStatus(true)
    }
};
</script>

<style scoped>
</style>