<template>
<div class="contact">
    <Banner>
        <template>
            <img src="../assets/banner5.jpg" alt="轮播图">
        </template>
    </Banner>
    <SubMenu>
        <template>
            <ul>
<!--                @click.prevent="customAnchor('#contact')"-->
                <li>联系我们</li>
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
    name: "Contact",
    components:{
        Banner,
        Footer,
        SubMenu
    }
}
</script>

<style scoped>

</style>