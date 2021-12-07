<template>
    <div class="door">
        <div class="door-goods-list" v-show="isListShow">
            <!-- 分类选项卡 -->
            <ProductSeriesCard
                :typeList="typeList"
                :getDataListById="getDoorDataListById"
            ></ProductSeriesCard>
            <!-- 商品数据展示 -->
            <div class="door-item-show-box clearfix">
                <ProductItem
                    v-for="item in doorDataList"
                    :key="item.id"
                    :dataItem="item"
                    @click.native="showGoodsDetails(item.did)"
                ></ProductItem>
            </div>
            <!-- 分页区域 -->
            <PageControl
                style="padding: 0"
                :total="total"
                :pageNumList="pageNumList"
                :currentPageIndex="currentPageIndex"
                :getSpecifiedPage="getSpecifiedPage"
                :getNextPage="getNextPage"
                :getPrevPage="getPrevPage"
            ></PageControl>
        </div>
        <div class="door-goods-detail">
            <router-view :changeListStatus='changeListStatus'></router-view>
        </div>
    </div>
</template>

<script>
import ProductSeriesCard from "@/components/ProductSeriesCard/index.vue";
import ProductItem from "@/components/ProductItem/index.vue";
import PageControl from "@/components/PageControl/index.vue";

export default {
    name: "Door",
    components: {
        ProductSeriesCard,
        ProductItem,
        PageControl,
    },
    data() {
        return {
            // 商品分类信息数组
            typeList: [],
            // 商品数据数组
            doorDataList: [],
            // 当前正在展示的页数
            currentPageIndex: 1,
            // 每页的大小
            pageSize: 9,
            // 当前展示类别总商品数量
            total: 0,
            // 分页展示数字的数组
            pageNumList: [],
            // 当前正在展示的商品分类 id
            displayId: 1,
            // 共有多少页
            pageNum: 0,
            // 控制 list 是否显示 默认为true
            isListShow: true,
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
                this.typeList = newArr;
            });
        },


        /**
         * 根据类型 id 获取商品数据
         * 该函数用于在当前 view 首次挂载时 或者 用户切换 ProductSeriesCard 选项卡的时候调用
         * 此时 pageIndex 和 pageSize 应该是不变的
         */
        getDoorDataListById(id) {
            // 更新
            this.currentPageIndex = 1;
            this.displayId = id;
            // 请求数据
            this.$api.product.door
                .getDoorDataListById(id, this.currentPageIndex, this.pageSize)
                .then((result) => {
                    // 根据 result 生成 doorDataList
                    let newArr = [];
                    for (let i = 0; i < result.data.length; i++) {
                        newArr[i] = {
                            id: result.data[i].dpImgUid,
                            did:result.data[i].dpId,
                            imgUrl: result.data[i].dpImg,
                            imgAlt: result.data[i].dpName,
                            describe: result.data[i].dpName,
                        };
                    }
                    // 根据 result 计算共有多少页
                    const pageNum = Math.ceil(result.count / this.pageSize);

                    // 根据 pageNum 生成 pageNumList
                    let newPageNumList = [];
                    for (let i = 0; i < pageNum; i++) {
                        newPageNumList[i] = {
                            id: "newPageNumList" + (i + 1),
                            content: i + 1,
                        };
                    }

                    // 更新 data
                    this.doorDataList = newArr;
                    this.total = result.count;
                    this.pageNum = pageNum;
                    this.pageNumList = newPageNumList;
                });
        },


        /**
         * 根据 pageIndex 获取商品数据
         * 该函数用于在当前页面点击 pageControl 组件对应页码按钮之后进行数据获取
         * 此时 id 和 pageSize 应该是固定不变的
         */
        getSpecifiedPage(pageIndex) {
            // 更新
            this.currentPageIndex = pageIndex;
            // 请求
            this.$api.product.door
                .getDoorDataListByPageIndex(
                    this.displayId,
                    pageIndex,
                    this.pageSize
                )
                .then((result) => {
                    // 根据 result 生成 doorDataList
                    let newArr = [];
                    for (let i = 0; i < result.data.length; i++) {
                        newArr[i] = {
                            id: result.data[i].dpImgUid,
                            did:result.data[i].dpId,
                            imgUrl: result.data[i].dpImg,
                            imgAlt: result.data[i].dpName,
                            describe: result.data[i].dpName,
                        };
                    }
                    this.doorDataList = newArr;
                });
        },


        /**
         * 请求上一页数据
         * 此时分类的id，pageSize的大小应该都是直接定死的，也就是从 data 中直接获取
         */
        getPrevPage() {
            // 判断
            if (this.currentPageIndex > 1) {
                // 成功的话就要进行 index--
                this.currentPageIndex--;
                // 再利用 -- 之后的数据进行数据请求
                this.getSpecifiedPage(this.currentPageIndex);
            }
        },


        /**
         * 请求下一页数据
         * 此时分类的id，pageSize的大小应该都是直接定死的，也就是从 data 中直接获取
         */
        getNextPage() {
            //  判断
            if (this.currentPageIndex < this.pageNum) {
                // 成功的话就要进行 index++
                this.currentPageIndex++;
                // 再利用 ++ 之后的数据进行数据请求
                this.getSpecifiedPage(this.currentPageIndex);
            }
        },


        /**
         * 显示商品详情的函数
         */
        showGoodsDetails(did){
            // 更新路由
            this.$router.push(`/product/door/door-goods/${did}`)
        },


        /**
         * 控制 list 的显示与隐藏
         */
        changeListStatus(status){
            this.isListShow = status
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