<template>
<div class="business">
    <Banner>
        <template>
            <img src="../assets/banner3.jpg" alt="轮播图">
        </template>
    </Banner>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
export default {
    name: "Business",
    components:{
        Banner,
        Footer
    }
}
</script>

<style scoped>

</style>