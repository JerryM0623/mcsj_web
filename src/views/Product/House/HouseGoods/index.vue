<template>
    <div class="house-goods">
        <ProductDetailTop
            :imgUrl='modelOne.rpImg'
            :imgAlt='modelOne.rpName'
            :name='modelOne.rpName'
            :topDescribeArr='topDescribeArr'
        ></ProductDetailTop>
        <ProductDetailMiddle :middleDescribeArr='middleDescribeArr'></ProductDetailMiddle>
        <ProductDetailBottom :bottomDescribrArr='bottomDescribrArr' :imgUrl='modelThree.rpImgDetails' :imgAlt='modelThree.rpImgDetailsUid'></ProductDetailBottom>
    </div>
</template>

<script>
import ProductDetailTop from '@/components/ProductDetailTop/index.vue'
import ProductDetailMiddle from '@/components/ProductDetailMiddle/index.vue'
import ProductDetailBottom from '@/components/ProductDetailBottom/index.vue'

import handleGoodsDetail from '@/utils/goods.js'

export default {
    name:'HouseGoods',
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
            topDescribeArr:[],
            middleDescribeArr:[],
            bottomDescribrArr:[]
        }
    },
    mounted(){
        this.changeListStatus(false)
        // 请求数据
        const hid = this.$route.params.id
        this.$api.product.house.getHouseGoodsDetail(hid).then(res => {

            // 这个函数实现数据的二次改造和 data 的更新
            handleGoodsDetail(2,res.data,this)
        })
    },
    beforeDestroy(){
        this.changeListStatus(true)
    }
};
</script>

<style scoped>
</style>