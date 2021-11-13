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
              <div class="home-part2-icon-list-title">{{ item.title }}</div>
              <div class="home-part2-icon-list-describe">
                {{ item.describe }}
              </div>
            </li>
          </ul>
        </template>
      </HomePage>
    </div>
    <!--        脚踏实地，成就实力门窗品牌-->
    <div class="part3">
      <HomePage
        title="脚踏实地，成就实力门窗品牌"
        titleColor="#d1a177"
        smallTitle="六大“星”助力，福耀“新”未来"
        backgroundColor="#111e47"
      >
        <template v-slot:home-page-content>
          <JerrySwiper
            :jerrySwiperOption="homePart3JerrySwiperOption"
            jerrySwiperId="home-part3-swiper"
          >
            <template v-slot:jerry-swiper-slides>
              <div
                v-for="item in homePart3JerrySwiperDataList"
                :key="item.id"
                class="swiper-slide"
              >
                <img
                  class="home-part3-swiper-img"
                  :src="item.imgUrl"
                  :alt="item.alt"
                />
                <div class="home-part3-swiper-describe-box">
                  <div>
                    <p class="home-part3-swiper-describe-title">
                      {{ item.describeTitle }}
                    </p>
                    <p class="home-part3-swiper-describe">
                      {{ item.describe }}
                    </p>
                    <p class="home-part3-swiper-describe-img">
                      <router-link to="/join"
                        ><img src="@/assets/home/part3/arrow_right.png" alt=""
                      /></router-link>
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </JerrySwiper>
        </template>
      </HomePage>
    </div>
    <!--        多家权威媒体跟踪报道-->
    <div class="part4">
      <HomePage
        title="多家权威媒体跟踪报道"
        titleColor="#000000"
        smallTitle="中国十大门窗品牌"
        backgroundColor="#fefefe"
      >
        <template v-slot:home-page-content>
          <JerrySwiper
            jerrySwiperId="home-part4-swiper"
            :jerrySwiperOption="homePart4JerrySwiperOption"
          >
            <template v-slot:jerry-swiper-slides>
              <div class="swiper-slide">
                <ul>
                  <li
                    v-for="item in homePart4JerrySwiperDataList"
                    :key="item.id"
                  >
                    <img :src="item.imgUrl" :alt="item.alt" />
                  </li>
                </ul>
              </div>
            </template>
          </JerrySwiper>
        </template>
      </HomePage>
    </div>
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
      // part3的swiper的配置属性
      homePart3JerrySwiperOption: {
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // part3的swiper的内容配置
      homePart3JerrySwiperDataList: [
        {
          id: "homePart3JerrySwiperDataList001",
          imgUrl: require("@/assets/home/part3/img1.jpg"),
          alt: "homePart3JerrySwiperDataList001",
          describeTitle: "服务优势",
          describe:
            "为了更好服务于经销商，星佰汇门窗采取了一对一跟单，7*24小时专业售后服务；完善的售前、售中、售后服务体系，为客户提供最便捷、最优质的服务。",
        },
        {
          id: "homePart3JerrySwiperDataList002",
          imgUrl: require("@/assets/home/part3/img2.jpg"),
          alt: "homePart3JerrySwiperDataList002",
          describeTitle: "产业链优势",
          describe:
            "公司拥有铝材挤压、木纹转印、门窗制造一体化生产配套产业链；所有产品系列自主研发设计，所有铝材自主生产配套，凸显出绝对的企业综合竞争力，雄厚的资本实力和完整产业链优势为企业的可持续发展保驾护航。",
        },
        {
          id: "homePart3JerrySwiperDataList003",
          imgUrl: require("@/assets/home/part3/img3.jpg"),
          alt: "homePart3JerrySwiperDataList003",
          describeTitle: "品牌优势",
          describe:
            "星佰汇门窗拥有50000平米的生产基地，在全国已经有200多个经销商门店，遍布全国各大城市，产品出口东南亚地区，深受广大消费者青睐。",
        },
        {
          id: "homePart3JerrySwiperDataList004",
          imgUrl: require("@/assets/home/part3/img4.jpg"),
          alt: "homePart3JerrySwiperDataList004",
          describeTitle: "产品优势",
          describe:
            "可全屋定制各种弧形、异形窗窗户及阳光房、厨房门、卫生间门、阳台门、隔断等，多种规格、颜色和款式可供不同消费者差异化需求，打造别具一格的特色。",
        },
        {
          id: "homePart3JerrySwiperDataList005",
          imgUrl: require("@/assets/home/part3/img5.jpg"),
          alt: "homePart3JerrySwiperDataList005",
          describeTitle: "品质优势",
          describe:
            "引进国外顶尖机械设备，全面达到同行领先水平，产品具有强度高、刚性好、不氧化、坚固耐用的特性，并有隔音、隔热、防潮防霉、防渗漏、无噪音、开闭轻便灵活等功能；使用方便，使用寿命长；可适应各地不同气候环境和个性化产品设计。",
        },
        {
          id: "homePart3JerrySwiperDataList006",
          imgUrl: require("@/assets/home/part3/img6.jpg"),
          alt: "homePart3JerrySwiperDataList006",
          describeTitle: "价格优势",
          describe:
            "星佰汇门窗对经销商进行严格的市场保护和配合，星佰汇门窗助您门店纯利润增长20%以上：“价”临天下，舍我其谁！震撼行业的价格优势使您的门店在市场竞争中脱颖而出、决胜终端！",
        },
      ],
      // part4的swiper属性配置
      homePart4JerrySwiperOption: {},
      // part4的swiper内容配置
      homePart4JerrySwiperDataList: [
        {
          id: "homePart4JerrySwiperDataList001",
          imgUrl: require("@/assets/home/part4/img1.jpg"),
          alt: "homePart4JerrySwiperDataList001",
        },
        {
          id: "homePart4JerrySwiperDataList002",
          imgUrl: require("@/assets/home/part4/img2.jpg"),
          alt: "homePart4JerrySwiperDataList002",
        },
        {
          id: "homePart4JerrySwiperDataList003",
          imgUrl: require("@/assets/home/part4/img3.jpg"),
          alt: "homePart4JerrySwiperDataList003",
        },
        {
          id: "homePart4JerrySwiperDataList004",
          imgUrl: require("@/assets/home/part4/img4.jpg"),
          alt: "homePart4JerrySwiperDataList004",
        },
        {
          id: "homePart4JerrySwiperDataList005",
          imgUrl: require("@/assets/home/part4/img5.jpg"),
          alt: "homePart4JerrySwiperDataList005",
        },
        {
          id: "homePart4JerrySwiperDataList006",
          imgUrl: require("@/assets/home/part4/img6.jpg"),
          alt: "homePart4JerrySwiperDataList006",
        },
        {
          id: "homePart4JerrySwiperDataList007",
          imgUrl: require("@/assets/home/part4/img7.jpg"),
          alt: "homePart4JerrySwiperDataList007",
        },
        {
          id: "homePart4JerrySwiperDataList008",
          imgUrl: require("@/assets/home/part4/img8.jpg"),
          alt: "homePart4JerrySwiperDataList008",
        },
        {
          id: "homePart4JerrySwiperDataList009",
          imgUrl: require("@/assets/home/part4/img9.jpg"),
          alt: "homePart4JerrySwiperDataList009",
        },
        {
          id: "homePart4JerrySwiperDataList010",
          imgUrl: require("@/assets/home/part4/img10.jpg"),
          alt: "homePart4JerrySwiperDataList010",
        },
        {
          id: "homePart4JerrySwiperDataList011",
          imgUrl: require("@/assets/home/part4/img11.jpg"),
          alt: "homePart4JerrySwiperDataList011",
        },
        {
          id: "homePart4JerrySwiperDataList012",
          imgUrl: require("@/assets/home/part4/img12.jpg"),
          alt: "homePart4JerrySwiperDataList012",
        },
        {
          id: "homePart4JerrySwiperDataList013",
          imgUrl: require("@/assets/home/part4/img13.jpg"),
          alt: "homePart4JerrySwiperDataList013",
        },
        {
          id: "homePart4JerrySwiperDataList014",
          imgUrl: require("@/assets/home/part4/img14.jpg"),
          alt: "homePart4JerrySwiperDataList014",
        },
        {
          id: "homePart4JerrySwiperDataList015",
          imgUrl: require("@/assets/home/part4/img15.jpg"),
          alt: "homePart4JerrySwiperDataList015",
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
.home-part2-text {
  line-height: 3;
  letter-spacing: 2px;
  font-size: 14px;
  color: #7c7c7c;
  font-weight: 400;
}
.home-part2-button a {
  display: inline-block;
  color: black;
  padding: 15px 30px;
  border: 1px solid #7c7c7c;
  margin: 20px 0;
  letter-spacing: 5px;
  transition: all 0.2s;
}
.home-part2-button a:hover {
  background-color: #0e1d48;
  color: white;
}
.home-part2-icon-list {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.home-part2-icon-list img {
  width: 70px;
  height: 80zpx;
  transition: all 0.3s;
}
.home-part2-icon-list li:hover img {
  transform: rotateY(180deg);
}
.home-part2-icon-list-title {
  margin: 10px 0;
  color: #d1a177;
  font-size: 18px;
  font-weight: 700;
}
.home-part2-icon-list-describe {
  margin: 10px 0;
  color: #9e9e9e;
  font-size: 14px;
}
/* part3部分 */
.part3 {
  position: relative;
}
.part3 .swiper-container {
  padding-bottom: 40px;
}
.home-part3-swiper-img {
  width: 100%;
}
.home-part3-swiper-describe-box {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: #d1a177;
  top: 0;
  left: 0;
  padding: 20px;
}
.home-part3-swiper-describe-box div {
  width: 100%;
  height: 100%;
  border: 1px solid white;
  padding: 30px 20px 0;
  color: white;
}
.home-part3-swiper-describe-box .home-part3-swiper-describe-title {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  opacity: 1;
}
.home-part3-swiper-describe-box .home-part3-swiper-describe {
  letter-spacing: 2px;
  line-height: 1.5;
  font-size: 14px;
  opacity: 1;
  margin-bottom: 20px;
}
.part3 .swiper-slide-active .home-part3-swiper-describe-box {
  display: block;
}
/* part4 */
.part4 .swiper-slide ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.part4 .swiper-slide ul li {
  flex-basis: 19%;
  height: 75px;
  margin-bottom: 50px;
  background-color: white;
  border: 1px solid #d6d5d5;
}
.part4 .swiper-slide ul li:hover {
  border: 1px solid black;
}
.part4 .swiper-slide ul li img {
  height: 100%;
}
</style>