<template>
<div class="consult">
    <Banner>
        <template>
            <img src="../assets/banner4.jpg" alt="轮播图">
        </template>
    </Banner>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
export default {
    name: "Consult",
    components:{
        Banner,
        Footer
    }
}
</script>

<style scoped>

</style>