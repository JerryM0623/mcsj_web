<template>
    <div class="door-goods">
        <ProductDetailTop
            :imgUrl='modelOne.dpImg'
            :imgAlt='modelOne.dpName'
            :name='modelOne.dpName'
            :topDescribeArr='topDescribeArr'
        ></ProductDetailTop>
        <ProductDetailMiddle :middleDescribeArr='middleDescribeArr'></ProductDetailMiddle>
        <ProductDetailBottom :bottomDescribrArr='bottomDescribrArr' :imgUrl='modelThree.dpImgDetails' :imgAlt='modelThree.dpImgDetailsUid'></ProductDetailBottom>
    </div>
</template>

<script>
import ProductDetailTop from "@/components/ProductDetailTop/index.vue";
import ProductDetailMiddle from "@/components/ProductDetailMiddle/index.vue";
import ProductDetailBottom from "@/components/ProductDetailBottom/index.vue";

import handleGoodsDetail from '@/utils/goods.js'

export default {
    name: "DoorGoods",
    props: {
        // 关闭开启 list 的函数
        changeListStatus: {
            type: Function,
            required: true,
        },
    },
    components: {
        ProductDetailTop,
        ProductDetailMiddle,
        ProductDetailBottom,
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
    mounted() {
        // 关闭 list 显示
        this.changeListStatus(false);
        // 请求门的数据
        const did = this.$route.params.id
        this.$api.product.door.getDoorGoodsDetail(did).then(res => {
            
            // 这个函数实现数据的二次改造和 data 的更新
            handleGoodsDetail(1,res.data,this)
        })
    },
    beforeDestroy() {
        // 开启 list 显示
        this.changeListStatus(true);
    },
};
</script>

<style>
</style>