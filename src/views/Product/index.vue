<template>
<div class="product">
    <Banner>
        <template>
            <img src="@/assets/banner2.jpg" alt="轮播图">
        </template>
    </Banner>
    <Footer></Footer>
</div>
</template>

<script>
import Banner from '@/components/Banner/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
    name: "Product",
    components:{
        Banner,
        Footer
    }
}
</script>

<style scoped>

</style>