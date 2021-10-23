<template>
<div class="consult">
    <Banner>
        <template>
            <img src="../assets/banner4.jpg" alt="轮播图">
        </template>
    </Banner>
    <SubMenu>
        <template>
            <ul>
<!--                @click.prevent="customAnchor('#news')"-->
                <li>公司新闻</li>
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
    name: "Consult",
    components:{
        Banner,
        Footer,
        SubMenu
    }
}
</script>

<style scoped>

</style>