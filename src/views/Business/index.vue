<template>
<div class="business">
    <Banner>
        <template>
            <img src="@/assets/banner3.jpg" alt="轮播图">
        </template>
    </Banner>
    <SubMenu>
        <template>
            <ul>
                <li @click.prevent="customAnchor('#lecture')">金牌讲师</li>
            </ul>
        </template>
    </SubMenu>
    <div id="lecture">
        <LectureItem v-for="lectureItem in lectures" :key="lectureItem.index" :lecture-item="lectureItem"></LectureItem>
    </div>
    <PageControl
        :total='totalCount'
        :pageNumList='bussinessPageNumList'
        :currentPageIndex='currentPageIndex'
        :getSpecifiedPage='getSpecifiedPage'
        :getNextPage='getNextPage'
        :getPrevPage='getPrevPage'
    ></PageControl>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner/index.vue'
import Footer from '@/components/Footer/index.vue'
import SubMenu from "@/components/SubMenu/index.vue";
import LectureItem from "@/components/LectureItem/index.vue";
import PageControl from "@/components/PageControl/index.vue";
export default {
    name: "Business",
    props:{
        // 锚点跳转函数
        customAnchor:{
            type:Function,
            required:true
        }
    },
    components:{
        Banner,
        Footer,
        SubMenu,
        LectureItem,
        PageControl
    },
    data(){
        return{
            // 团队数据
            lectures:[],
            // 每页显示数据
            PageSize:3,
            // 当前正在显示的页数
            currentPageIndex: 1,
            // 总的记录数
            totalCount:0,
            // 总的页面数
            totalPageNum:0,
            // 传给 pageControl 组件的数组
            bussinessPageNumList:[]
        }
    },
    methods:{
        /**
         * 请求团队数据的方法
         * currentPageIndex 当前页面数 默认值就是当前 data 里面的currentPageIndex
         * pageSize 每页的大小 默认值就是当前 data 里面的 pageSize
         */
        getLectures(currentPageIndex = this.currentPageIndex,PageSize = this.PageSize){
            this.$api.bussiness.getLectures(currentPageIndex,PageSize).then(result => {
                console.log(result)
                // 数据赋值到 data
                this.lectures = result.data.records;
                // 总记录数
                this.totalCount = result.count
                // 赋值页面数
                this.totalPageNum = result.data.pages
                // 根据页面数生成 list
                let newArr = []
                for(let i = 0 ; i < result.data.pages ; i++){
                    newArr[i] = {
                        id:'bussinessPageNumList'+i,
                        content: i + 1
                    }
                }
                this.bussinessPageNumList = newArr
            })
        },
        /**
         * 点击对应页面请求对应页面
         * index 需要请求的 pageIndex
         */
        getSpecifiedPage(index){
            this.currentPageIndex = index;
            this.getLectures(index)
        },
        /**
         * 点击下一页发送下一页的请求页面
         */
        getNextPage(){
            if(this.currentPageIndex < this.totalPageNum){
                this.currentPageIndex ++;
                this.getLectures();
            }
        },
        /**
         * 点击上一页发送上一页的请求页面
         */
        getPrevPage(){
            if(this.currentPageIndex > 1){
                this.currentPageIndex --;
                this.getLectures();
            }
        }
    },
    mounted() {
        // 挂载完毕向服务器请求数据
        this.getLectures();
    }
}
</script>

<style scoped>

</style>