<template>
<div class="about">
    <Banner>
        <template>
            <img src="../assets/banner.jpg" alt="轮播图">
        </template>
    </Banner>
    <SubMenu>
        <template>
            <ul>
                <li @click.prevent="customAnchor('#summary')">公司简介</li>
                <li @click.prevent="customAnchor('#idea')">公司理念</li>
                <li @click.prevent="customAnchor('#introduce')">品牌介绍</li>
                <li @click.prevent="customAnchor('#course')">发展历程</li>
                <li @click.prevent="customAnchor('#honor')">荣誉资质</li>
            </ul>
        </template>
    </SubMenu>
    <div style="height: 1000px;background-color: #f5f5f5;"></div>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import SubMenu from '@/components/SubMenu'
export default {
    name: "About",
    components:{
        Banner,
        Footer,
        SubMenu
    },
    methods:{
        customAnchor(index){
            const titleElement = document.querySelector(index);
            if (titleElement) titleElement.scrollIntoView();
        }
    }
}
</script>

<style scoped>
</style>