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
        <div float-box class="product-middle-left">
            <SideMenu
                chineseTitle='产品展示'
                englishTitle='PRODUCT DISPLAY'
                :sideMenuList='sideMenuList'
            ></SideMenu>
        </div>
        <div float-box class="product-middle-right">
            <router-view></router-view>
        </div>
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
                {id:'sideMenuList001',content:'窗系列',link:'/product/window'},
                {id:'sideMenuList002',content:'门系列',link:'/product/door'},
                {id:'sideMenuList003',content:'房系列',link:'/product/house'}
            ]
        }
    }
}
</script>

<style scoped>
.product-middle{
    padding: 0 150px;
    margin: 100px 0 50px;
}
.product-middle div[float-box]{
    float: left;
}
.product-middle .product-middle-left{
    width: 220px;
    margin-right: 65px;
}
.product-middle .product-middle-right{
    width: calc(100% - 285px);
}
</style>