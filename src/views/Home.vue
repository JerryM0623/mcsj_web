<template>
  <div class="home">
    <!--        最顶端轮播图-->
    <div class="part1">
      <JerrySwiper
        jerry-swiper-id="home-part1-swiper"
        :jerry-swiper-option="homePart1JerrySwiperOption"
      >
        <template v-slot:jerry-swiper-slides>
          <div
            v-for="item in homePart1JerrySwiperDataList"
            :key="item.id"
            class="swiper-slide"
          >
            <img
              class="home-part1-swiper-img"
              :src="item.imgUrl"
              :alt="item.alt"
            />
          </div>
        </template>
      </JerrySwiper>
    </div>
    <!--        理想生活 焕”星”体验-->
    <div class="part2">
      <HomePage
        title="理想生活 焕”星”体验"
        titleColor="#000000"
        smallTitle="凝聚品牌力量，打造优质产品"
        backgroundColor="#f0f0f0"
      >
        <template v-slot:home-page-content>
          <p
            v-for="item in homePart2TextDataList"
            :key="item.id"
            class="home-part2-content home-part2-text"
          >
            {{ item.text }}
          </p>
          <div class="home-part2-content home-part2-button">
            <router-link to="/about">MORE+</router-link>
          </div>
          <ul class="home-part2-content home-part2-icon-list">
            <li v-for="item in homePart2PicDataList" :key="item.id">
              <img :src="item.imgUrl" :alt="item.alt" />
              <div class="home-part2-icon-list-title">{{item.title}}</div>
              <div class="home-part2-icon-list-describe">{{item.describe}}</div>
            </li>
          </ul>
        </template>
      </HomePage>
    </div>
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
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";
import JerrySwiper from "../components/JerrySwiper";

export default {
  name: "Home",
  components: {
    HomePage,
    Footer,
    JerrySwiper,
  },
  data() {
    return {
      // part1的swiper的配置属性
      homePart1JerrySwiperOption: {
        autoplay: {
          delay: 3000,
        },
        loop: true,
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      // part1的swiper的内容配置
      homePart1JerrySwiperDataList: [
        {
          id: "homePart1Pic001",
          imgUrl: require("@/assets/home/part1/pic1.jpg"),
          alt: "轮播图1",
        },
        {
          id: "homePart1Pic002",
          imgUrl: require("@/assets/home/part1/pic2.jpg"),
          alt: "轮播图2",
        },
        {
          id: "homePart1Pic003",
          imgUrl: require("@/assets/home/part1/pic3.jpg"),
          alt: "轮播图3",
        },
        {
          id: "homePart1Pic004",
          imgUrl: require("@/assets/home/part1/pic4.jpg"),
          alt: "轮播图4",
        },
      ],
      // part2的text数据
      homePart2TextDataList: [
        { id: "homePart2TextDataList001", text: "【品牌释义】CIBIVA" },
        {
          id: "homePart2TextDataList002",
          text: "品牌英文名称蕴含的品牌价值：",
        },
        {
          id: "homePart2TextDataList003",
          text: "Contracted Art（简约风尚）、 International（国际品味）",
        },
        {
          id: "homePart2TextDataList004",
          text: "Vogue（极简设计）是星佰汇审美的标准与原则。",
        },
        {
          id: "homePart2TextDataList005",
          text: "Brilliant （卓越品质）、 Ingenuity（匠心艺术）是星佰汇人思想源动力",
        },
        {
          id: "homePart2TextDataList006",
          text: "而Animate （创新不止）是星佰汇对理想生活的极致追求，是焕新的力量。",
        },
      ],
      // part2的PicList数据
      homePart2PicDataList: [
        {
          id: "homePart2PicDataList001",
          imgUrl: require("@/assets/home/part2/img1.png"),
          alt: "homePart2PicDataList001",
          title: "创造品牌",
          describe: "专业致力系统门窗 一流品质",
        },
        {
          id: "homePart2PicDataList002",
          imgUrl: require("@/assets/home/part2/img2.png"),
          alt: "homePart2PicDataList002",
          title: "一流品质",
          describe: "一丝不苟，精工制造",
        },
        {
          id: "homePart2PicDataList003",
          imgUrl: require("@/assets/home/part2/img3.png"),
          alt: "homePart2PicDataList003",
          title: "技术研发",
          describe: "拥有研究中心，不断开拓新产品",
        },
        {
          id: "homePart2PicDataList004",
          imgUrl: require("@/assets/home/part2/img4.png"),
          alt: "homePart2PicDataList004",
          title: "专业服务",
          describe: "24小时一站式贴心服务",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* part1的swiper配置 */
.home-part1-swiper-img {
  width: 100%;
}
/* part2 */
.home-part2-text{
  line-height: 3;
  letter-spacing: 2px;
  font-size: 14px;
  color: #7c7c7c;
  font-weight: 400;
}
.home-part2-button a{
  display: inline-block;
  color:black;
  padding: 15px 30px;
  border: 1px solid #7c7c7c;
  margin: 20px 0;
  letter-spacing: 5px;
  transition: all 0.2s;
}
.home-part2-button a:hover{
  background-color: #0e1d48;
  color: white;
}
.home-part2-icon-list{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.home-part2-icon-list img{
  width: 70px;
  height: 80zpx;
  transition: all .3s;
}
.home-part2-icon-list li:hover img{
  transform: rotateY(180deg);
}
.home-part2-icon-list-title{
  margin: 10px 0;
  color: #d1a177;
  font-size: 18px;
  font-weight: 700;
}
.home-part2-icon-list-describe{
  margin: 10px 0;
  color: #9e9e9e;
  font-size: 14px;
}
</style>