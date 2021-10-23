<template>
<div class="about">
    <Banner>
        <template>
            <img src="../assets/banner.jpg" alt="轮播图">
        </template>
    </Banner>
</div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
    name: "About",
    components:{
        Banner
    }
}
</script>

<style scoped>
.about{
    /*position: relative;*/
    height: 2000px;
}
</style>