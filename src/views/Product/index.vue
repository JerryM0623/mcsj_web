<template>
<div class="product">
    <!-- 顶端banner图 -->
    <Banner>
        <template>
            <img src="@/assets/banner2.jpg" alt="轮播图">
        </template>
    </Banner>

    <!-- 内容部分 -->
    <div class="product-middle clearfix">
        <div class="product-middle-left">
            <SideMenu
                chineseTitle='产品展示'
                englishTitle='PRODUCT DISPLAY'
                :sideMenuList='sideMenuList'
            ></SideMenu>
        </div>
        <div class="product-middle-right">456</div>
    </div>

    <!-- 页脚 -->
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner/index.vue'
import Footer from '@/components/Footer/index.vue'
import SideMenu from '@/components/SideMenu/index.vue'
export default {
    name: "Product",
    components:{
        Banner,
        Footer,
        SideMenu
    },
    data(){
        return{
            // 传给 SideMenu 组件用于渲染列表的数组
            sideMenuList:[
                // id必须要，用于传给 vue 进行 diff 算法计算
                // content 就是用于展示的数据
                {id:'sideMenuList001',content:'窗系列'},
                {id:'sideMenuList002',content:'门系列'},
                {id:'sideMenuList003',content:'房系列'}
            ]
        }
    }
}
</script>

<style scoped>
.product-middle{
    padding: 0 150px;
    margin: 100px auto;
}
.product-middle div{
    float: left;
}
.product-middle .product-middle-left{
    width: 220px;
    margin-right: 65px;
}
.product-middle .product-middle-right{
    width: 934px;
    background-color: purple;
}
</style>