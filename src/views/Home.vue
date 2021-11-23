<template>
  <div class="home">
    <!--        最顶端轮播图-->
    <div class="part1">
      <JerrySwiper
        jerry-swiper-id="home-part1-swiper"
        :jerry-swiper-option="jerrySwiperOptions.homePart1JerrySwiperOption"
      >
        <template v-slot:jerry-swiper-slides>
          <div
            v-for="item in homePartDataLists.homePart1JerrySwiperDataList"
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
            v-for="item in homePartDataLists.homePart2TextDataList"
            :key="item.id"
            class="home-part2-content home-part2-text"
          >
            {{ item.text }}
          </p>
          <div class="home-part2-content home-part2-button">
            <router-link to="/about">MORE+</router-link>
          </div>
          <ul class="home-part2-content home-part2-icon-list">
            <li v-for="item in homePartDataLists.homePart2PicDataList" :key="item.id">
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
            :jerrySwiperOption="jerrySwiperOptions.homePart3JerrySwiperOption"
            jerrySwiperId="home-part3-swiper"
          >
            <template v-slot:jerry-swiper-slides>
              <div
                v-for="item in homePartDataLists.homePart3JerrySwiperDataList"
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
            :jerrySwiperOption="jerrySwiperOptions.homePart4JerrySwiperOption"
          >
            <template v-slot:jerry-swiper-slides>
              <div class="swiper-slide">
                <ul>
                  <li
                    v-for="item in homePartDataLists.homePart4JerrySwiperDataList"
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
    <div class="part5">
      <HomePage
        title="中国十大家装门窗品牌"
        titleColor="#d1a177"
        smallTitle="星佰汇门窗，在“中国十大铝合金门窗品牌”、“中国十大家装品牌”、“中国著名门窗品牌”的评选中遥遥领先，成功斩获这三项大奖。"
        backgroundColor="#0f1e47"
      >
        <template v-slot:home-page-content>
          <img
            class="home-part5-img"
            src="@/assets/home/part5/img1.jpg"
            alt="homePart5Pic001"
          />
        </template>
      </HomePage>
    </div>
    <!--        汇聚精英团队，打造卓越品牌-->
    <div class="part6">
      <HomePage
        title="汇聚精英团队，打造卓越品牌"
        titleColor="#000000"
        smallTitle="同道同行，同行同享"
        backgroundColor="#ffffff"
      >
        <template v-slot:home-page-content>
          <img
            class="home-part6-img"
            src="@/assets/home/part6/img1.jpg"
            alt="homePart6Pic001"
          />
        </template>
      </HomePage>
    </div>
    <!--        专业团队助您赢在终端-->
    <div class="part7">
      <HomePage
        title="专业团队助您赢在终端"
        titleColor="#d1a177"
        smallTitle="因为很专注，所以更专业"
        backgroundColor="#0f1e47"
      >
        <template v-slot:home-page-content>
          <JerrySwiper
            :jerrySwiperOption="jerrySwiperOptions.homePart7JerrySwiperOption"
            jerrySwiperId="home-part7-swiper"
          >
            <template v-slot:jerry-swiper-slides>
              <div
                v-for="item in homePartDataLists.homePart7JerrySwiperDataList"
                :key="item.id"
                class="swiper-slide"
              >
                <div class="home-part7-swiper-slide-left">
                  <div class="top-box">
                    <div class="icon-box">
                      <img src="@/assets/home/part7/img1.png" />
                    </div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.smallTitle }}</p>
                  </div>
                  <div class="bottom-box">
                    <h3>课程：</h3>
                    <p>{{ item.classes }}</p>
                    <router-link to="/business"><span>MORE+</span></router-link>
                  </div>
                </div>
                <div class="home-part7-swiper-slide-right">
                  <img class="show-pic" :src="item.imgUrl" :alt="item.alt" />
                </div>
              </div>
            </template>
          </JerrySwiper>
        </template>
      </HomePage>
    </div>
    <!--        产品展示-->
    <div class="part8">
      <HomePage
        title="产品展示"
        titleColor="black"
        smallTitle="千锤百炼 细节决定产品质量"
        backgroundColor="white"
      >
        <template v-slot:home-page-content>
          <div class="part8-box">
            <div v-for="item in homePartDataLists.homePart8DataList" :key="item.id" class="part8-main-box" :style="{backgroundImage:`url('${item.backgroundImageUrl}')`}">
              <div class="part8-icon-box"><img :src="item.iconUrl" :alt="item.alt"></div>
              <div class="part8-describe-box">
                <p>{{ item.describeChinese }}</p>
                <p>{{ item.describeEnglish }}</p>
              </div>
              <div class="part8-buttom-box"><router-link to="/product">查看更多+</router-link></div>
            </div>
          </div>
        </template>
      </HomePage>
    </div>
    <!--        媒体资讯-->
    <div class="part9">
      <HomePage
        title="媒体资讯"
        titleColor="black"
        smallTitle="实时关注行业发展趋势"
        backgroundColor="white"
      >
        <template v-slot:home-page-content>
          <div class="part9-box">
            <div class="part9-bottom-box"></div>
            <div class="part9-news-box">
              <router-link to="/consult">
                <NewsItem
                  newsDate='11-22'
                  newsTitle='星佰汇新版VI形象已盛大发布'
                  newsText='2019我们共同见证这一年我们依然在工作上挥汗如雨或者像候鸟一样满世界飞翔，无论有多忙走得有多远却始终被一种力量牵绊，被一种惦记温暖，被一种责任召唤，感谢全国的经销商家人们一路相伴2020我们踌躇满志，蓄势待发 我们新的VI形象新的口号响起新的梦想集结即将起航！'
                ></NewsItem>
              </router-link>
              <router-link to="/consult">
                <NewsItem
                  newsDate='11-22'
                  newsTitle='星佰汇新版VI形象已盛大发布'
                  newsText='2019我们共同见证这一年我们依然在工作上挥汗如雨或者像候鸟一样满世界飞翔，无论有多忙走得有多远却始终被一种力量牵绊，被一种惦记温暖，被一种责任召唤，感谢全国的经销商家人们一路相伴2020我们踌躇满志，蓄势待发 我们新的VI形象新的口号响起新的梦想集结即将起航！'
                ></NewsItem>
              </router-link>
              <router-link to="/consult">
                <NewsItem
                  newsDate='11-22'
                  newsTitle='星佰汇新版VI形象已盛大发布'
                  newsText='2019我们共同见证这一年我们依然在工作上挥汗如雨或者像候鸟一样满世界飞翔，无论有多忙走得有多远却始终被一种力量牵绊，被一种惦记温暖，被一种责任召唤，感谢全国的经销商家人们一路相伴2020我们踌躇满志，蓄势待发 我们新的VI形象新的口号响起新的梦想集结即将起航！'
                ></NewsItem>
              </router-link>
            </div>
          </div>
        </template>
      </HomePage>
    </div>
    <!--        页脚-->
    <Footer></Footer>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";
import JerrySwiper from "@/components/JerrySwiper";
import NewsItem from '@/components/NewsItem';

import homeData from '@/data/home.js'

export default {
  name: "Home",
  components: {
    HomePage,
    Footer,
    JerrySwiper,
    NewsItem
  },
  data() {
    return {
      jerrySwiperOptions:{
        // part1的swiper的配置对象
        homePart1JerrySwiperOption: {
          autoplay: {
            delay: 3000,
          },
          loop: true,
          speed: 500,
          pagination: {
            el: ".swiper-pagination",
          },
          observe:true
        },
        // part3的swiper的配置对象
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
          observe:true
        },
        // part4的swiper配置对象
        homePart4JerrySwiperOption: {
          pagination: {
            el: ".swiper-pagination",
          },
          observe:true
        },
        // part7的swiper配置对象
        homePart7JerrySwiperOption: {
          pagination: {
            el: ".swiper-pagination",
          },
          observe:true
        },
      },
      homePartDataLists:{
        // part1的swiper的内容配置
        homePart1JerrySwiperDataList: [],
        // part2的text数据
        homePart2TextDataList: [],
        // part2的PicList数据
        homePart2PicDataList: [],
        // part3的swiper的内容配置
        homePart3JerrySwiperDataList: [],
        // part4的swiper内容配置
        homePart4JerrySwiperDataList: [],
        // part7的swiper数据列表
        homePart7JerrySwiperDataList: [],
        // part8的数据列表
        homePart8DataList:[]
      },
    };
  },
  created(){
    for(let item in homeData){
      this.$set(this.homePartDataLists,item,homeData[item]);
    }
  }
};
</script>

<style scoped>
/* part1 */
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
  margin-top: 70px;
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
.part4 .swiper-container {
  margin-top: 70px;
}
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
  height: 99%;
}
/* part5 part6*/
.part5 .home-part5-img,
.part6 .home-part6-img {
  width: 100%;
}
/* part7 */
.part7 .swiper-container {
  height: 500px;
  padding-bottom: 50px;
}
.part7 .swiper-slide {
  border: 1px solid #384568;
  display: flex;
}
.part7 .swiper-slide .home-part7-swiper-slide-left {
  width: 70%;
  height: 100%;
  padding: 40px 80px 40px 30px;
  text-align: left;
  color: white;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .top-box {
  border-bottom: 1px solid #666666;
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .top-box .icon-box {
  height: 40px;
  margin-bottom: 20px;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .top-box .icon-box img {
  height: 100%;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .top-box h3 {
  color: #d1a177;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  padding-left: 20px;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .top-box p {
  font-size: 14px;
  padding-left: 20px;
  color: #808080;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .bottom-box {
  padding-left: 20px;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .bottom-box h3 {
  color: #d1a177;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .bottom-box p {
  color: #808080;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 50px;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .bottom-box a {
  border: 1px solid white;
  padding: 10px 20px;
  transition: all 0.2s;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .bottom-box a:hover {
  background-color: #d1a177;
  color: black;
  border: 1px solid #d1a177;
}
.part7 .swiper-slide .home-part7-swiper-slide-left .bottom-box a span {
  letter-spacing: 3px;
}
.part7 .swiper-slide .home-part7-swiper-slide-right {
  position: relative;
  width: 30%;
  background-color: #d1a177;
}
.part7 .swiper-slide .home-part7-swiper-slide-right .show-pic {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100%;
  height: 100%;
}
/* part8 */
.part8 .part8-box{
  height: 550px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.part8 .part8-box .part8-main-box{
  position: relative;
  width: 33.333333%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.part8 .part8-box .part8-main-box::before{
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .4);
  transition: all .3s;
  z-index: 1;
}
.part8 .part8-box .part8-main-box:hover::before{
  background-color: rgba(0, 0, 0, .2);
}
.part8 .part8-box .part8-main-box div{
  z-index: 2;
}
.part8 .part8-box .part8-main-box .part8-icon-box{
  width: 50px;
  height: 50px;
}
.part8 .part8-box .part8-main-box .part8-icon-box img{
  width: 100%;
  height: 100%;
}
.part8 .part8-box .part8-main-box .part8-describe-box{
  margin: 20px 0;
  color: white;
}
.part8 .part8-box .part8-main-box .part8-buttom-box{
  padding: 10px 20px;
  background-color: #d1a177;
  border-radius: 50px;
}
.part8 .part8-box .part8-main-box .part8-buttom-box a{
  color: white;
}
/* part9 */
.part9 .part9-box .part9-news-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.part9 .part9-box .part9-news-box a{
  width: 30%;
}
</style>