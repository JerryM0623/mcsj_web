<template>
    <div class="door">
        <!-- 分类选项卡 -->
        <ProductSeriesCard
            :typeList='typeList'
            :getDataListById='getDoorDataListById'
        ></ProductSeriesCard>
        <!-- 商品数据展示 -->
        <div class="door-item-show-box clearfix">
            <ProductItem v-for="item in doorDataList" :key="item.id" :dataItem='item'></ProductItem>
        </div>
        <!-- 分页区域 -->
        <PageControl 
            style="padding:0" 
            :total='total'
            :pageNumList='pageNumList'
            :currentPageIndex='currentPageIndex'
            :getSpecifiedPage='getSpecifiedPage'
        ></PageControl>
    </div>
</template>

<script>
import ProductSeriesCard from "@/components/ProductSeriesCard/index.vue";
import ProductItem from '@/components/ProductItem/index.vue'
import PageControl from '@/components/PageControl/index.vue'

export default {
    name: "Door",
    components: {
        ProductSeriesCard,
        ProductItem,
        PageControl
    },
    data() {
        return {
            // 商品分类信息数组
            typeList: [],
            // 商品数据数组
            doorDataList:[],
            // 当前正在展示的页数
            currentPageIndex:1,
            // 每页的大小
            pageSize:9,
            // 当前展示类别总商品数量
            total:0,
            // 分页展示数字的数组
            pageNumList:[],
            // 当前正在展示的商品分类 id
            displayId:1
        };
    },
    methods: {
        /**
         * 获取门商品的分类
         */
        getDoorSeries() {
            this.$api.product.door.getDoorSeries().then((result) => {
                // 根据 result 生成 typeList
                let newArr = [];
                for (let i = 0; i < result.length; i++) {
                    newArr[i] = {
                        id: result[i].did,
                        type: result[i].dtype,
                    };
                }
                this.typeList = newArr
            });
        },

        /**
         * 根据 id 获取商品数据
         * 该函数用于在当前 view 首次挂载时 或者 用户切换 ProductSeriesCard 选项卡的时候调用
         * 此时 pageIndex 和 pageSize 应该是不变的
         */
        getDoorDataListById(id){
            // 更新
            this.currentPageIndex = 1
            this.displayId = id
            // 请求数据
            this.$api.product.door.getDoorDataListById(id,this.currentPageIndex,this.pageSize).then(result => {
                // 根据 result 生成 doorDataList
                let newArr = []
                for(let i = 0 ; i < result.data.length ; i++){
                    newArr[i] = {
                        id:result.data[i].dpImgUid,
                        imgUrl:result.data[i].dpImg,
                        imgAlt:result.data[i].dpName,
                        describe:result.data[i].dpName
                    }
                }
                // 根据 result 计算共有多少页
                const pageNum = Math.ceil(result.count / this.pageSize)

                // 根据 pageNum 生成 pageNumList
                let newPageNumList = []
                for(let i = 0 ; i < pageNum ; i++){
                    newPageNumList[i] = {
                        id:'newPageNumList'+(i+1),
                        content: (i+1)
                    }
                }

                // 更新 data
                this.doorDataList = newArr
                this.total = result.count
                this.pageNumList = newPageNumList
            })
        },

        /**
         * 根据 pageIndex 获取商品数据
         * 该函数用于在当前页面点击 pageControl 组件对应页码按钮之后进行数据获取
         * 此时 id 和 pageSize 应该是固定不变的
         */
        getSpecifiedPage(pageIndex){
            // 更新
            this.currentPageIndex = pageIndex
            // 请求
            this.$api.product.door.getDoorDataListByPageIndex(this.displayId,pageIndex,this.pageSize).then(result => {
                // 根据 result 生成 doorDataList
                let newArr = []
                for(let i = 0 ; i < result.data.length ; i++){
                    newArr[i] = {
                        id:result.data[i].dpImgUid,
                        imgUrl:result.data[i].dpImg,
                        imgAlt:result.data[i].dpName,
                        describe:result.data[i].dpName
                    }
                }
                this.doorDataList = newArr
            })
            
        }
    },
    mounted() {
        // 挂载门系列的第一件事--获取分类数据
        this.getDoorSeries();
        // 挂载门系列的第二件事--获取当前数据
        this.getDoorDataListById(1);
    },
};
</script>

<style>
</style>