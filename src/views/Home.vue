<template>
  <div class="home">
    <!--        最顶端轮播图-->
      <div class="part1">
          <JerrySwiper jerry-swiper-id="home-part1-swiper" :jerry-swiper-option="homePart1JerrySwiperOption">
              <template v-slot:jerry-swiper-slides>
                  <div v-for="item in homePart1JerrySwiperDataList" :key="item.id" class="swiper-slide">
                      <img class="home-part1-swiper-img" :src="item.imgUrl" :alt="item.alt">
                  </div>
              </template>
          </JerrySwiper>
      </div>
    <!--        理想生活 焕”星”体验-->
    <!--        脚踏实地，成就实力门窗品牌-->
    <!--        多家权威媒体跟踪报道-->
    <!--        中国十大家装门窗品牌-->
    <!--        汇聚精英团队，打造卓越品牌-->
    <!--        专业团队助您赢在终端-->
    <!--        产品展示-->
    <!--        媒体资讯-->
    <!--        页脚-->
    <Footer></Footer>
  </div>
</template>

<script>
// import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";
import JerrySwiper from "../components/JerrySwiper";

export default {
  name: "Home",
  components: {
    // HomePage,
    Footer,
      JerrySwiper
  },
  data() {
    return {
        // part1的swiper的配置属性
        homePart1JerrySwiperOption:{
            autoplay:{
                delay:3000
            },
            loop:true,
            speed:500,
            pagination:{
                el:'.swiper-pagination'
            }
        },
        // part1的swiper的内容配置
        homePart1JerrySwiperDataList:[
            {id:'homePart1Pic001',imgUrl:require('@/assets/home/part1/pic1.jpg'),alt:'轮播图1'},
            {id:'homePart1Pic002',imgUrl:require('@/assets/home/part1/pic2.jpg'),alt:'轮播图2'},
            {id:'homePart1Pic003',imgUrl:require('@/assets/home/part1/pic3.jpg'),alt:'轮播图3'},
            {id:'homePart1Pic004',imgUrl:require('@/assets/home/part1/pic4.jpg'),alt:'轮播图4'},
        ]
    };
  },
};
</script>

<style scoped>
/* part1的swiper配置 */
.home-part1-swiper-img{
    width: 100%;
}
</style>