<template>
<div class="business">
    <Banner>
        <template>
            <img src="../assets/banner3.jpg" alt="轮播图">
        </template>
    </Banner>
    <SubMenu>
        <template>
            <ul>
<!--                @click.prevent="customAnchor('#lecture')"-->
                <li >金牌讲师</li>
            </ul>
        </template>
    </SubMenu>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import SubMenu from "@/components/SubMenu";
export default {
    name: "Business",
    components:{
        Banner,
        Footer,
        SubMenu
    }
}
</script>

<style scoped>

</style>