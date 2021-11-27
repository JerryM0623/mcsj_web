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
    <PageControl :currentPageNum="currentPageNum" :pageLength="totalCount"></PageControl>
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
            // 总数据
            lectures:[
                {
                    id:'001',
                    title:'战狼团队',
                    smallTitle:'战狼团队',
                    describe:'星佰汇门窗骨干力量，为星佰汇的发展贡献了自己的青春与才华。用自己的热情与阳光带领客服部温暖全国经销商。',
                    courses:'《领袖的风采》、《完美狼团队》、《细节决定成败》、《精细化生产》、《赢销为王》、《企业发展三驾马车》'
                },
                {
                    id:'002',
                    title:'战狼团队',
                    smallTitle:'战狼团队',
                    describe:'星佰汇门窗骨干力量，为星佰汇的发展贡献了自己的青春与才华。用自己的热情与阳光带领客服部温暖全国经销商。',
                    courses:'《领袖的风采》、《完美狼团队》、《细节决定成败》、《精细化生产》、《赢销为王》、《企业发展三驾马车》'
                },
                {
                    id:'003',
                    title:'战狼团队',
                    smallTitle:'战狼团队',
                    describe:'星佰汇门窗骨干力量，为星佰汇的发展贡献了自己的青春与才华。用自己的热情与阳光带领客服部温暖全国经销商。',
                    courses:'《领袖的风采》、《完美狼团队》、《细节决定成败》、《精细化生产》、《赢销为王》、《企业发展三驾马车》'
                }
            ],
            // 每页显示数据
            showSize:1,
            // 当前正在显示的页数
            currentPageNum: 1,
            // 总的记录数
            totalCount:0
        }
    },
    mounted() {
        this.$axios.get('/api/getLectureCount')
            .then(result => {
                console.log(result)
            })
    }
}
</script>

<style scoped>

</style>