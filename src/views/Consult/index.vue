<template>
<div class="consult">
    <!-- 顶部图片 -->
    <Banner>
        <template>
            <img src="@/assets/banner4.jpg" alt="轮播图">
        </template>
    </Banner>
    <!-- 中间导航菜单 -->
    <SubMenu>
        <template>
            <ul>
                <li @click.prevent="customAnchor('#news')">公司新闻</li>
            </ul>
        </template>
    </SubMenu>
    <!-- 媒体咨询内容展示区 -->
    <div id="news" class="media-news-show-box">
        <div class="news-item-box" v-for="item in newsList" :key="item.miImgUid">
            <router-link to="/consult/news">
                <NewsItem
                    :isBorder="false"
                    backgroundColor="white"
                    :newsDate="item.miDate"
                    :newsTitle="item.title"
                    :newsText="item.introduce"
                    :newsImg="item.miImg"
                ></NewsItem>
            </router-link>
        </div>
    </div>
    <!-- 分页按钮控制 -->
    <div class="page-control-box">
        <PageControl
            :total="total"
            :pageNumList="pageNumList"
            :currentPageIndex="currentPageIndex" 
            :getSpecifiedPageNews="getSpecifiedPageNews"
            :getNextPageNews="getNextPageNews"
            :getPrevPageNews="getPrevPageNews"
        ></PageControl>
    </div>
    <router-view></router-view>
    <!-- 页脚 -->
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner/index.vue'
import Footer from '@/components/Footer/index.vue'
import SubMenu from "@/components/SubMenu/index.vue";
import NewsItem from '@/components/NewsItem/index.vue';
import PageControl from '@/components/PageControl/index.vue'

export default {
    name: "Consult",
    props:{
        customAnchor: {
            type: Function,
            required: true,
        },
    },
    components:{
        Banner,
        Footer,
        SubMenu,
        NewsItem,
        PageControl
    },
    data(){
        return{
            // 总数，用于传递给 pageControl 组件
            total:0,
            // 页面总数
            pageTotalNum:0,
            // 每一页显示的最大数量
            pageSize:9,
            // 当前正在显示的页面索引
            currentPageIndex:1,
            // 数据，用于渲染的数据列表
            newsList:[],
            // 生成的页面数量
            pageNumList:[]
        }
    },
    mounted(){
        /**
         * 首次挂载该页面的时候，向服务器请求第一页的 9 条数据
         */
        this.getNews();
    },
    methods:{
        /**
         * 请求新闻的方法
         * pageIndex: 表示需要查询的页面索引编号,默认是当前的页面编号
         */
        getNews(pageIndex = this.currentPageIndex,pageSize = this.pageSize){
            this.$api.consult.getOnePageNews(pageIndex,pageSize).then(result => {
                // 传入总数
                this.total = result.count;
                // 创建一个新的数组
                let newArr = []
                // 进行遍历修改日期
                result.data.forEach((item,index) => {
                    newArr[index] = {...item,miDate:item.miDate.substring(5,10)}
                })
                // 传入数据列表
                this.newsList = newArr;
            })
        },
        /**
         * 请求指定页面的新闻
         * pageIndex: 指定页面的索引编号
         */
        getSpecifiedPageNews(pageIndex){
            // 修改当前的currentPageIndex
            this.currentPageIndex = pageIndex
            // 调用方法进行数据请求
            this.getNews(pageIndex)
        },
         /**
         * 请求下一个页面的新闻
         */
        getNextPageNews(){
            // 增加currentPageIndex
            if(this.currentPageIndex < this.pageTotalNum){
                this.currentPageIndex ++;
                this.getNews();
            }
        },
         /**
         * 请求上一个页面的新闻
         * pageIndex: 指定页面的索引编号
         */
        getPrevPageNews(){
            // 减少currentPageIndex
            if(this.currentPageIndex > 1){
                this.currentPageIndex --;
                this.getNews();
            }
        }
    },
    watch:{
        /**
         * 监视 total 的变化
         * newValue: 变化之后的值
         * 功能: 在 total 发生变化之后,立刻进行计算获取最新的页面总数
         */
        total:function(newValue){
            const pageTotalNum = Math.ceil(newValue / this.pageSize)
            this.pageTotalNum = pageTotalNum
            for(let index = 0 ; index < pageTotalNum ; index++){
                this.pageNumList[index] = {
                    id:`pageNumList${index + 1}`,
                    content:(index + 1).toString()
                };
            }
        }
    }
}
</script>

<style scoped>
.media-news-show-box{
    padding: 0 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
}
.media-news-show-box .news-item-box{
    width: 30%;
    margin: 50px 0 0 0;
}
</style>