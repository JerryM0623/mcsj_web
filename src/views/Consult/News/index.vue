<template>
    <div class="news-detail clearfix">
        <div class="left-box">
            <SideMenu
                chineseTitle="媒体资讯"
                englishTitle="NEWS"
                :sideMenuList="sideMenuList"
            ></SideMenu>
        </div>
        <div class="right-box">
            <div class="news-title">{{newsDetail.title}}</div>
            <div class="news-content" v-html="newsDetail.content"></div>
        </div>
    </div>
</template>

<script>

import SideMenu from '@/components/SideMenu/index.vue'

export default {
    name:'ConsultNews',
    props:{
        // 父组件传递过来的用于控制父组件元素的函数
        changeIsMediaShow:{
            type:Function,
            required:true
        }
    },
    components:{
        SideMenu
    },
    data(){
        return{
            // 传递给 SideMenu 组件的数据列表
            sideMenuList:[
                {id:'sideMenuList001',content:'公司新闻',link:'/consult'}
            ],
            // 存储新闻的数据
            newsDetail:{
                title:'loading...',
                content:''
            }
        }
    },
    mounted(){
        // 让父组件的元素消失
        this.changeIsMediaShow(false);
        // 请求数据
        let id = this.$route.params.id
        this.$api.consult.getNewsDetail(id).then(res => {
            this.newsDetail.title = res.data.mibTitle
            this.newsDetail.content = res.data.mibContent
        })
    },
    beforeDestroy(){
        // 让父组件的元素显示
        this.changeIsMediaShow(true);
    }
}
</script>

<style>
.news-detail{
    padding: 0 150px;
    margin: 100px 0;
}
.news-detail .left-box{
    float: left;
    width: 220px;
    background-color: pink;
}
.news-detail .right-box{
    float: right;
    width: calc(100% - 220px - 50px);
    background-color: white;
}
.news-detail .right-box .news-title{
    color: #d1a177;
    font-size: 40px;
    letter-spacing: 2px;
    line-height: 2;
    padding: 50px 80px;
    text-align: center;
}
.news-detail .right-box .news-content{
    padding: 0 80px;
    font-size: 18px;
    letter-spacing: 1.2px;
    line-height: 2;
}
</style>