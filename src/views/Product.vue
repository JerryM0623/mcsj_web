<template>
<div class="product">
    <Banner>
        <template>
            <img src="../assets/banner2.jpg" alt="轮播图">
        </template>
    </Banner>
</div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
    name: "Product",
    components:{
        Banner
    }
}
</script>

<style scoped>
.product{
    height: 2000px;
}
</style>