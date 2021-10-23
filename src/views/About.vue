<template>
<div class="about">
    <Banner>
        <template>
            <img src="../assets/banner.jpg" alt="轮播图">
        </template>
    </Banner>

    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
export default {
    name: "About",
    components:{
        Banner,
        Footer
    }
}
</script>

<style scoped>
</style>