<template>
<div class="swiper-container" :class="[jerrySwiperId]">
    <div class="swiper-wrapper">
        <slot name="jerry-swiper-slides"></slot>
    </div>
    <!-- 小圆点-->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
<!--    <div class="jerry-swiper-button-prev swiper-button-prev"></div>-->
<!--    <div class="jerry-swiper-button-next swiper-button-next"></div>-->
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default {
    name: "JerrySwiper",
    props:{
        jerrySwiperOption:{
            type:Object,
            required:true
        },
        jerrySwiperId:{
            type:String,
            required:true
        }
    },
    mounted() {
        const that = this
        setTimeout(() => {
            new Swiper(`.${that.jerrySwiperId}`,that.jerrySwiperOption)
        },200)
    }
}
</script>

<style scoped>
</style>