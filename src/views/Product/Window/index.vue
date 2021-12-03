<template>
    <div class="window">
        <!-- 产品分类选项卡 -->
        <div class="window-series-show-box">
            <ProductSeriesCard
                :typeList="windowTypeList"
                :getDataListById="getWindowDataListById"
            ></ProductSeriesCard>
        </div>
        <!-- 产品展示区 -->
        <div class="window-item-show-box clearfix">
            <ProductItem
                v-for="item in windowDataList"
                :key="item.id"
                :dataItem="item"
            ></ProductItem>
        </div>
        <!-- 分页控制区 -->
        <PageControl
            style="padding: 0"
            :currentPageIndex="currentPageIndex"
            :total="total"
            :pageNumList='pageNumList'
            :getNextPage='getNextPage'
            :getPrevPage='getPrevPage'
            :getSpecifiedPage='getSpecifiedPage'
        ></PageControl>
    </div>
</template>

<script>
import ProductSeriesCard from "@/components/ProductSeriesCard/index.vue";
import ProductItem from "@/components/ProductItem/index.vue";
import PageControl from "@/components/PageControl/index.vue";

export default {
    name: "Window",
    components: {
        ProductSeriesCard,
        ProductItem,
        PageControl,
    },
    data() {
        return {
            // window 页面的产品列表
            windowDataList: [],
            // 窗系列的产品分类
            windowTypeList: [
                { id: "windowTypeList001", type: "断桥" },
                { id: "windowTypeList002", type: "非断桥" },
            ],
            // 分页相关的数据
            currentPageIndex: 1,
            pageSize: 9,
            total: 0,
            pageNum:0,
            // 分页的数据数组列表
            pageNumList:[],
            // 当前正在展示的商品的分类 id(默认是1)
            displayId:1
        };
    },
    methods: {
        /**
         * 获取窗系列的所有分类
         */
        getWindowSeries() {
            this.$api.product.window.getWindowSeries().then((result) => {
                let newArr = [];
                // 更换 key 名
                for (let i = 0; i < result.length; i++) {
                    newArr[i] = {
                        type: result[i].wtype,
                        id: result[i].wid,
                    };
                }
                // 更新 data
                this.windowTypeList = newArr;
            });
        },
        /**
         * 根据 id 获取数据
         * 这个方法用于切换分类选项卡的时候加载数据和 window 组件第一次渲染的时候加载数据使用
         * 
         * id：需要查询的id,默认就是 data 里面的displayId
         * currentPageIndex：需要查询的页数，默认是当前data里面的currentPageIndex
         * pageSize：页面显示数据的最大数量
         */
        getWindowDataListById(id) {
            // 将 currentPageIndex 更改
            this.currentPageIndex = 1;
            // 请求数据
            this.$api.product.window
                .getWindowDataById(id, this.currentPageIndex, this.pageSize)
                .then((result) => {

                    // 根据 result 生成新的数组
                    let newArr = [];
                    for (let i = 0; i < result.data.length; i++) {
                        newArr[i] = {
                            id: result.data[i].wpImgUid,
                            imgUrl: result.data[i].wpImg,
                            imgAlt: result.data[i].wpName,
                            describe: result.data[i].wpName,
                        };
                    }

                    // 根据 count 计算页面数 并生成对应的 newPageNumList 数据数组
                    const pageNum = Math.ceil(result.count / this.pageSize)
                    let newPageNumList = []
                    for(let i = 0 ; i < pageNum ; i++){
                        newPageNumList[i] = {
                            id:"windowPageNumList"+(i+1),
                            content:(i+1)
                        }
                    }

                    // 更新 data
                    this.total = result.count;
                    this.windowDataList = newArr;
                    this.pageNum = pageNum
                    this.pageNumList = newPageNumList
                });
        },
        /**
         * 请求当前点击页面的数据
         * 此时分类的id，pageSize的大小应该都是直接定死的，也就是从 data 中直接获取
         */
        getSpecifiedPage(pageIndex,id = this.displayId,pageSize = this.pageSize){
            // console.log(pageIndex,id,pageSize)
            this.$api.product.window.getWindowDataByPageIndex(pageIndex,id,pageSize).then(result => {
                // 根据 result 生成新的数组
                let newArr = [];
                for (let i = 0; i < result.data.length; i++) {
                    newArr[i] = {
                        id: result.data[i].wpImgUid,
                        imgUrl: result.data[i].wpImg,
                        imgAlt: result.data[i].wpName,
                        describe: result.data[i].wpName,
                    };
                }

                //更新 data
                this.windowDataList = newArr
            })
        },
        /**
         * 请求上一页数据
         * 此时分类的id，pageSize的大小应该都是直接定死的，也就是从 data 中直接获取
         */
        getPrevPage(){
            // 判断
            if(this.currentPageIndex > 1){
                // 成功的话就要进行 index--
                this.currentPageIndex --
                // 再利用 -- 之后的数据进行数据请求
                this.getSpecifiedPage(this.currentPageIndex)
            }
            

        },
        /**
         * 请求下一页数据
         * 此时分类的id，pageSize的大小应该都是直接定死的，也就是从 data 中直接获取
         */
        getNextPage(){
             // 判断
             if(this.currentPageIndex < this.pageNum){
                // 成功的话就要进行 index++
                this.currentPageIndex ++;
                // 再利用 ++ 之后的数据进行数据请求
                this.getSpecifiedPage(this.currentPageIndex)
             }
        }
    },
    mounted() {
        // 获取窗系列有多少分类
        this.getWindowSeries();
        // 默认获取 id 为 1 的数据(非断桥商品的数据)
        this.getWindowDataListById(1);
    },
};
</script>

<style scoped>
</style>