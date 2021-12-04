<template>
    <div class="house">
        <!-- 分类选项卡 -->
        <ProductSeriesCard
            :typeList="typeList"
            :getDataListById="getHouseDataListById"
        ></ProductSeriesCard>
        <!-- 商品展示区 -->
        <div class="window-item-show-box clearfix">
            <ProductItem
                v-for="item in HouseDataList"
                :key="item.id"
                :dataItem="item"
            ></ProductItem>
        </div>
        <!-- 分页控制区 -->
        <PageControl
            style="padding: 0"
            :total="total"
            :pageNumList="pageNumList"
            :currentPageIndex="currentPageIndex"
            :getSpecifiedPage="getSpecifiedPage"
            :getNextPage='getNextPage'
            :getPrevPage='getPrevPage'
        ></PageControl>
    </div>
</template>

<script>
import ProductSeriesCard from "@/components/ProductSeriesCard/index.vue";
import ProductItem from "@/components/ProductItem/index.vue";
import PageControl from "@/components/PageControl/index.vue";

export default {
    name: "House",
    components: {
        ProductSeriesCard,
        ProductItem,
        PageControl,
    },
    data() {
        return {
            // 房的商品分类列表
            typeList: [],
            // 商品数据列表
            HouseDataList: [],
            // 当前正在展示的商品类型id
            displayId: 1,
            // 现在正在展示的pageIndex
            currentPageIndex: 1,
            // 页面的数据承载量
            pageSize: 9,
            // 总的数据量
            total: 0,
            // 总的页面数
            pageNum: 0,
            // 分页按钮列表
            pageNumList: [],
        };
    },
    methods: {
        /**
         * 获取所有的房类型
         * 在页面在开始挂载的时候调用
         */
        getHouseSeries() {
            this.$api.product.house.getHouseSeries().then((result) => {
                let newTypeList = [];
                for (let i = 0; i < result.length; i++) {
                    newTypeList[i] = {
                        id: result[i].rid,
                        type: result[i].rtype,
                    };
                }
                this.typeList = newTypeList;
            });
        },
        /**
         * 通过 id 获取商品数据
         * 在页面的挂载阶段默认调用 或者 是用户切换类型选项卡的时候调用
         * 此时 displayId 会伴随着用户的分类选项卡切换而改变
         * 切换选项卡之后随之展示新的分类的第一页数据，即切换选项卡之后 currentPageIndex = 1
         */
        getHouseDataListById(id) {
            // 更新
            this.currentPageIndex = 1;
            this.displayId = id;

            // 请求
            this.$api.product.house
                .getHouseDataListByIdOrPageIndex(
                    id,
                    this.currentPageIndex,
                    this.pageSize
                )
                .then((result) => {
                    // 根据 result 生成 HouseDataList
                    let newHouseDataList = [];
                    for (let i = 0; i < result.data.length; i++) {
                        newHouseDataList[i] = {
                            id: result.data[i].rpImgUid,
                            imgUrl: result.data[i].rpImg,
                            imgAlt: result.data[i].rpName,
                            describe: result.data[i].rpName,
                        };
                    }

                    // 根据 result 计算 pageNum 并且 生成 pageNumList
                    const pageNum = Math.ceil(result.count / this.pageSize);
                    let newPageNumList = [];
                    for (let i = 0; i < pageNum; i++) {
                        newPageNumList[i] = {
                            id: "housePageNumList" + (i + 1),
                            content: i + 1,
                        };
                    }

                    // 更新 data
                    this.total = result.count;
                    this.pageNum = pageNum
                    this.HouseDataList = newHouseDataList;
                    this.pageNumList = newPageNumList;
                });
        },
        /**
         * 通过 pageIndex 进行数据获取
         * 点击分页组件具体页码按钮的时候调用此函数
         * 此时 currentPageIndex 应该随着点击而发生改变
         * displayId 和 pageSize 此时应该不会变化
         */
        getSpecifiedPage(pageIndex) {
            // 更新data
            this.currentPageIndex = pageIndex;
            // 请求数据
            this.$api.product.house
                .getHouseDataListByIdOrPageIndex(
                    this.displayId,
                    pageIndex,
                    this.pageSize
                )
                .then((result) => {
                    // 根据 result 生成 HouseDataList
                    let newHouseDataList = [];
                    for (let i = 0; i < result.data.length; i++) {
                        newHouseDataList[i] = {
                            id: result.data[i].rpImgUid,
                            imgUrl: result.data[i].rpImg,
                            imgAlt: result.data[i].rpName,
                            describe: result.data[i].rpName,
                        };
                    }
                    this.HouseDataList = newHouseDataList;
                });
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
            //  判断
             if(this.currentPageIndex < this.pageNum){
            console.log(1)

                // 成功的话就要进行 index++
                this.currentPageIndex ++;
                // 再利用 ++ 之后的数据进行数据请求
                this.getSpecifiedPage(this.currentPageIndex)
             }
        }
    },
    mounted() {
        // 获取所有的房类型
        this.getHouseSeries();
        // 挂在之后默认请求 id为1，的第一页的数据
        this.getHouseDataListById(1);
    },
};
</script>

<style>
</style>