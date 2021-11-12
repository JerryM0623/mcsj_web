<template>
    <div class="about">
        <!-- 导航栏下方的图片 -->
        <Banner>
            <template>
                <img src="../assets/banner.jpg" alt="轮播图"/>
            </template>
        </Banner>



        <!-- 图片下方的页面子菜单 -->
        <SubMenu>
            <template>
                <ul>
                    <li @click.prevent="customAnchor('#summary')">公司简介</li>
                    <li @click.prevent="customAnchor('#idea')">公司理念</li>
                    <li @click.prevent="customAnchor('#introduce')">品牌介绍</li>
                    <li @click.prevent="customAnchor('#course')">发展历程</li>
                    <li @click.prevent="customAnchor('#honor')">荣誉资质</li>
                </ul>
            </template>
        </SubMenu>



        <!-- 第一个文章 -->
        <Artical
            backgroundColor="#f5f5f5"
            fontColor="#000000"
            :is-grid-show="false"
            :is-carousel-show="true"
        >
            <template v-slot:title><p id="summary">公司简介</p></template>
            <template v-slot:small-title><p>COMPANY PROFILE</p></template>
            <template v-slot:content>
                <p>
                    星佰汇门窗是佛山市星际铝业有限公司南海星佰汇门窗分公司直属品牌，坐落于中国铝材之都——广东佛山，生产基地总面积50000多平方米，是一家集设计、研发、生产、销售、服务为一体的专业化、技术化门窗生产厂家。星佰汇门窗重视品质打造，所有产品都经过多重检测，较强产品密封性，安全性和耐久性能进行测试，不断改进产品质量，缔造超乎品质界限的至高品质产品。
                </p>
                <p>
                    “仰望星空•脚踏实地•做好门窗”是星佰汇门窗的信念与源动力，致力打造人们喜爱首选的中高端门窗品牌，打造绿色家居，构建理想生活，焕新人居生活体验是我们的使命，焕新是我们对生活极致追求的动力，用科技打造门窗最高等级的安全性能，成为门窗行业的标杆品牌，我们一直在路上。
                </p>
            </template>
            <template v-slot:carousel>
                <JerrySwiper jerry-swiper-id="summery" class="summary-course-jerry-swiper" :jerry-swiper-option="firstJerrySwiperOption">
                    <template v-slot:jerry-swiper-slides>
                        <div v-for="item in summarySwiperList" :key="item.id" class="swiper-slide">
                            <img class="summary-course-img" :src="item.imgUrl" :alt="item.alt">
                        </div>
                    </template>
                </JerrySwiper>
            </template>
        </Artical>



        <!-- 第二个文章 -->
        <Artical
            backgroundColor="#101e48"
            fontColor="#d0a076"
            :is-grid-show="true"
            :is-carousel-show="false"
        >
            <template v-slot:title><p id="idea">公司理念</p></template>
            <template v-slot:small-title><p>COMPANY PROFILE</p></template>
            <template v-slot:content>
                <p>
                    仰望星空•脚踏实地•做好门窗；仰望星空，照亮理想人居的曙光
                    回望星佰汇过去，全新出发，用广阔星空的心胸践行“家•想象力”理念，勇敢想象未来理想的生活空间与视界。
                    脚踏实地，成就实力门窗品牌星佰汇门窗；坚持提升品牌内涵，以产品品质为重要支撑，内外均衡发展，稳步推进品牌形象塑造，以国际品味接轨，立足长远发展提升铝合金门窗品牌意识，打造首选的实力门窗品牌口碑，焕新人们生活体验。
                    做好门窗，焕新居家生活新方式为人民提供优质的生活体验，星佰汇门窗在设计之初，综合考虑门窗各个部件的有机组合，保证门窗的高性能呈现，创建理想生活空间，焕新居家生活方式，享受居优越之上的体验。
                </p>
            </template>
            <template v-slot:grid>
                <div v-for="grid in gridList" :key="grid.id" class="grid-box">
                    <h3>{{ grid.title }}</h3>
                    <p>{{ grid.text }}</p>
                </div>
            </template>
        </Artical>



        <!-- 第三个文章 -->
        <Artical
            backgroundColor="#ffffff"
            fontColor="#000000"
            :is-grid-show="false"
            :is-carousel-show="false"
        >
            <template v-slot:title><p id="introduce">品牌介绍</p></template>
            <template v-slot:small-title><p>BRAND INTRODUCTION</p></template>
            <template v-slot:content>
                <h3>公司介绍</h3>
                <p>
                    星佰汇门窗（ＣＩＢＩＶＡ）是佛山市星际铝业有限公司南海星佰汇门窗分公司直属品牌，坐落于中国铝材之都——广东佛山，生产基地总面积50000多平方米，是一家集设计、研发、生产、销售、服务为一体的专业化、技术化门窗生产厂家。
                </p>
                <p>
                    <img src="../assets/about/introduce/logo_big.png" alt=""/>
                </p>
                <h3>公司业务</h3>
                <p>
                    1、&nbsp;在管理模式上，星佰汇门窗采用规划化6S生产管理，对整个生产车间进行专业的管理和系统化的生产。
                </p>
                <p>
                    2、&nbsp;在规模设备上，星佰汇门窗拥生产基地总面积5万多平方米的现代化厂房，配备多条生产流水线，全套门窗生产设备，创立智能门窗管理系统，配件量身定做，各类系统窗、断桥平开窗、推拉窗、阳光房、推拉门、平开窗等系列产品。
                </p>
                <p>
                    3、&nbsp;在销售渠道上，星佰汇门窗配备了专业的服务团队和网络销售系统，并着力于人才激励、设备改善、智能高科技、销售服务方面投入。
                </p>
                <p>
                    4、&nbsp;星佰汇门窗深耕行业市场，推进区域化战略，建立健全服务体系，建立一站式平台，，以科学规范的程式化生产管理，全员全方位精益化质量控制，确保每一道工序都被要求精益求精，每一款产品都能被要求精益化生产。
                </p>
                <p>
                    5、&nbsp;在加盟店运营上，星佰汇门窗采取品牌化战略，实行专卖店建设全程督导，统一VI形象设计、SI装修标准等，在全国各大中城市推进200-300平方米旗舰店建设，全国推广100-200平方米形象店建设，为门窗加盟商提供全套专属的推广方案制定及宣传资料、推广物料支持，协助终端推广。
                </p>
                <h3>公司规模</h3>
                <p>主要关联（控股）机构：佛山市星际铝业有限公司</p>
                <h3>公司管理（公司治理）</h3>
                <p>股东大会：佛山市星际铝业有限公司</p>
                <h3>企业文化</h3>
                <h3>品牌标识</h3>
                <p>C（Contracted Art） &nbsp;&nbsp;简约风尚</p>
                <p>I（International）&nbsp;&nbsp;国标品味</p>
                <p>B（Brilliant）&nbsp;&nbsp;卓越品质</p>
                <p>l（lngenuity）&nbsp;&nbsp;匠心艺术</p>
                <p>V（Vogue）&nbsp;&nbsp;极简艺术</p>
                <p>A(Animate)&nbsp;&nbsp;创新不止</p>
                <p>
                    星佰汇门窗通过对生活空间的营造，传递一种低调奢华，简约贵气的美。返璞归真，简单从容、真实的生活态度。
                </p>
                <h3>公司荣誉</h3>
                <p>
                    企业使命：星福万家·构建和谐安宁的家居生活企业愿景：成为专业造门窗领跑者·造就百年门业品牌事业宗旨：为客户创造价值·助员工安居乐业·保企业健康发展产品观：人品决定产品·品质决定市场·信誉赢得未来客户观：客户就是“衣食父母团队观：团结协作·和谐奋进·成就精彩为人观：
                </p>
                <h3>技术获奖</h3>
                <p>中国3.15诚信企业</p>
                <p>中国十大家装门窗品牌</p>
                <p>最有影响力企业</p>
                <p>全国消费者放心满意品牌</p>
                <p>门窗协会理事单位</p>
                <p>
                    <img src="../assets/about/introduce/315.png" alt=""/>
                    <img src="../assets/about/introduce/2017.png" alt=""/>
                    <img src="../assets/about/introduce/changwu.png" alt=""/>
                </p>
            </template>
        </Artical>



        <!-- 第四个文章 -->
        <Artical
            backgroundColor="#f5f5f5"
            fontColor="#000000"
            :is-grid-show="false"
            :is-carousel-show="true"
        >
            <template v-slot:title><p id="course">发展历程</p></template>
            <template v-slot:small-title><p>DEVELOPMENT PATH</p></template>
            <template v-slot:carousel>
                <JerrySwiper jerry-swiper-id="course" class="course-jerry-swiper" :jerry-swiper-option="courseJerrySwiperOption">
                    <template v-slot:jerry-swiper-slides>
                        <div v-for="item in courseSwiperList" :key="item.id" class="course-swiper-slide swiper-slide">
                            <img class="summary-course-img" :src="item.imgUrl" :alt="item.alt">
                            <p class="course-year">{{item.year}}</p>
                            <p class="course-text">{{item.text}}</p>
                        </div>
                    </template>
                </JerrySwiper>
            </template>
        </Artical>



        <!-- 第五个文章 -->
        <Artical
            backgroundColor="#101e48"
            fontColor="#d0a076"
            :is-grid-show="false"
            :is-carousel-show="true"
        >
            <template v-slot:title><p id="honor">荣誉资质</p></template>
            <template v-slot:small-title><p>HONOR</p></template>
            <template v-slot:carousel>
                <JerrySwiper class="honor-jerry-swiper" jerry-swiper-id="honor" :jerry-swiper-option="honorJerrySwiperOption">
                    <template v-slot:jerry-swiper-slides>
                        <div class="swiper-slide">
                            <ul class="honor-flex">
                                <li v-for="item in honorSWiperList" :key="item.id"><img :src="item.imgUrl" :alt="item.alt"></li>
                            </ul>
                        </div>
                    </template>
                </JerrySwiper>
            </template>
        </Artical>



        <!-- 页脚 -->
        <Footer></Footer>
    </div>
</template>

<script>
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SubMenu from "@/components/SubMenu";
import Artical from "@/components/Artical";
import JerrySwiper from "../components/JerrySwiper";

export default {
    name: "About",
    props: {
        customAnchor: {
            type: Function,
            required: true,
        },
    },
    components: {
        Banner,
        Footer,
        SubMenu,
        Artical,
        JerrySwiper
    },
    data() {
        return {
            // summary轮播图的信息
            summarySwiperList: [
                {
                    id: "001",
                    imgUrl: require("@/assets/about/swiper-summary/course1.jpg"),
                    alt: "轮播图1",
                },
                {
                    id: "002",
                    imgUrl: require("@/assets/about/swiper-summary/course2.jpg"),
                    alt: "轮播图2",
                },
                {
                    id: "003",
                    imgUrl: require("@/assets/about/swiper-summary/course3.jpg"),
                    alt: "轮播图3",
                },
                {
                    id: "004",
                    imgUrl: require("@/assets/about/swiper-summary/course4.jpg"),
                    alt: "轮播图4",
                },
                {
                    id: "005",
                    imgUrl: require("@/assets/about/swiper-summary/course5.jpg"),
                    alt: "轮播图5",
                },
                {
                    id: "006",
                    imgUrl: require("@/assets/about/swiper-summary/course6.jpg"),
                    alt: "轮播图6",
                },
                {
                    id: "007",
                    imgUrl: require("@/assets/about/swiper-summary/course7.jpg"),
                    alt: "轮播图7",
                },
                {
                    id: "008",
                    imgUrl: require("@/assets/about/swiper-summary/course8.jpg"),
                    alt: "轮播图8",
                },
                {
                    id: "009",
                    imgUrl: require("@/assets/about/swiper-summary/course9.jpg"),
                    alt: "轮播图9",
                },
            ],
            // course轮播图数据
            courseSwiperList: [
                {
                    id: "001",
                    imgUrl: require("@/assets/about/swiper-course/lunbo1.jpg"),
                    alt: "轮播图1",
                    year: "1999年",
                    text: "7月董事长梁活荣在佛山澜石开设第一家门厂，厂房面积360平方米；同年10月扩充2000平方米新厂，主营铝合金卫生间门及塑钢门。",
                },
                {
                    id: "002",
                    imgUrl: require("@/assets/about/swiper-course/lunbo2.jpg"),
                    alt: "轮播图2",
                    year: "2002年",
                    text: "在松厦工业区宏图路扩建700平方米厂房，生产与销售铝合金推拉门、吊趟门、卫生间门、塑钢门。",
                },
                {
                    id: "003",
                    imgUrl: require("@/assets/about/swiper-course/lunbo3.jpg"),
                    alt: "轮播图3",
                    year: "2004年",
                    text: "在松厦工业区顺景路扩新厂面积22000平方米，生产与销售铝合金推拉门、吊趟门、卫生间门、塑钢门、折叠门。",
                },
                {
                    id: "004",
                    imgUrl: require("@/assets/about/swiper-course/lunbo4.jpg"),
                    alt: "轮播图4",
                    year: "2009年",
                    text: "在官窑红沙工业区自建50000平方米新厂。即“星际铝业集团公司”主营：挤压铝材、喷涂与木纹加工，铝材在供应本厂成品门窗的同时开始对外销售。同年11月，顺景路门厂迁入红沙新厂。",
                },
                {
                    id: "005",
                    imgUrl: require("@/assets/about/swiper-course/lunbo5.jpg"),
                    alt: "轮播图5",
                    year: "2014年",
                    text: "4月在官窑官抱路开设门窗第二分厂，厂房面积15000平方米。",
                },
                {
                    id: "006",
                    imgUrl: require("@/assets/about/swiper-course/lunbo6.jpg"),
                    alt: "轮播图6",
                    year: "2016年",
                    text: "3月在松岗塘联工业区自建新厂房31000平方米，开设门窗第三分厂；同年7月正式投产，即“星佰汇门窗”，生产与销售阳光房、窗户、推拉门、吊趟门、平开门、折叠门等全系列铝合金门窗产品。",
                },
                {
                    id: "007",
                    imgUrl: require("@/assets/about/swiper-course/lunbo7.jpg"),
                    alt: "轮播图7",
                    year: "2017年",
                    text: "3月在狮山北工业区自建37000平方米新厂，即门窗第一分场扩建的新厂房，同年5月正式投产。",
                },
                {
                    id: "008",
                    imgUrl: require("@/assets/about/swiper-course/lunbo8.jpg"),
                    alt: "轮播图8",
                    year: "2018年",
                    text: "1月在红沙工业区铝材总厂扩建窗户阳光房新厂24000平方米，同年5月正式投产。",
                },
                {
                    id: "009",
                    imgUrl: require("@/assets/about/swiper-course/lunbo9.jpg"),
                    alt: "轮播图9",
                    year: "2019年",
                    text: "产品更丰富完善，品牌形象定位、展厅全面调整升级。",
                },
            ],
            // honor轮播图数据
            honorSWiperList: [
                {
                    id: "001",
                    imgUrl: require("@/assets/about/swiper-honor/lunbo1.jpg"),
                    alt: "轮播图1",
                },
                {
                    id: "002",
                    imgUrl: require("@/assets/about/swiper-honor/lunbo2.jpg"),
                    alt: "轮播图2",
                },
                {
                    id: "003",
                    imgUrl: require("@/assets/about/swiper-honor/lunbo3.jpg"),
                    alt: "轮播图3",
                },
                {
                    id: "004",
                    imgUrl: require("@/assets/about/swiper-honor/lunbo4.jpg"),
                    alt: "轮播图4",
                },
                {
                    id: "005",
                    imgUrl: require("@/assets/about/swiper-honor/lunbo5.jpg"),
                    alt: "轮播图5",
                },
                {
                    id: "006",
                    imgUrl: require("@/assets/about/swiper-honor/lunbo6.jpg"),
                    alt: "轮播图6",
                },
            ],
            // idea表格数据
            gridList: [
                {
                    id: "001",
                    title: "企业使命",
                    text: "星福万家·构建和谐安宁的家居生活",
                },
                {
                    id: "002",
                    title: "企业愿景",
                    text: "成为专业造门窗领跑者·造就百年门业品牌",
                },
                {
                    id: "003",
                    title: "事业宗旨",
                    text: "为客户创造价值·助员工安居乐业·保企业健康发展",
                },
                {
                    id: "004",
                    title: "产品观",
                    text: "人品决定产品·品质决定市场·信誉赢得未来",
                },
                {
                    id: "005",
                    title: "客户观",
                    text: "客户就是“衣食父母”",
                },
                {
                    id: "006",
                    title: "团队观",
                    text: "团结协作·和谐奋进·成就精",
                },
                {
                    id: "007",
                    title: "工作作风",
                    text: "认真务实•行动迅速•保证结果",
                },
                {
                    id: "008",
                    title: "为人观",
                    text: "乐于付出·勇于担当·真诚感恩",
                },
            ],


            // 表示第一个文章节点的轮播图的配置
            firstJerrySwiperOption: {
                pagination:{
                    el:'.swiper-pagination'
                },
                loop:false,
                slidesPerView:3,
                slidesPerGroup:3,
                spaceBetween:20
            },
            // 表示第四个文章节点的轮播图的配置
            courseJerrySwiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                },
                loop:false,
                slidesPerView:3,
                slidesPerGroup:3
            },
            // 表示第五个文章节点的轮播图的配置
            honorJerrySwiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                },
                loop:false,
                slidesPerView:1,
                slidesPerGroup:1
            }
        }
    }
};
</script>

<style scoped>
/* 下面的css全都用来描述第二个 Artical 里面的表格 */
.grid-box {
    width: 25%;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #dcddde;
    letter-spacing: 1px;
    text-align: center;
    line-height: 30px;
}

.grid-box h3 {
    margin: 0 0 10px 0;
}

.grid-box p {
    font-size: 14px;
}

.grid-box:nth-child(1),
.grid-box:nth-child(3),
.grid-box:nth-child(6),
.grid-box:nth-child(8) {
    background-color: #d1a177;
    color: #101e48;
}

.grid-box:nth-child(2) h3,
.grid-box:nth-child(4) h3,
.grid-box:nth-child(5) h3,
.grid-box:nth-child(7) h3 {
    color: #d1a177;
}

/* 用于控制第一个文章节点的轮播图 */
.summary-course-jerry-swiper{
    padding-bottom: 30px;
}
.summary-course-img{
    width: 100%;
}

/* 第四个节点的样式 */
.course-swiper-slide{
    padding: 0 20px;
    border-right: 2px solid #d1a177;
    min-height: 450px;
}
.course-jerry-swiper{
    padding-bottom: 50px;
}
.course-year{
    font-weight: 700;
    font-size: 18px;
    color: #d1a177;
    margin: 10px 0;
}
.course-text{
    color: #808080;
    letter-spacing: 2px;
    line-height: 2;
}

/* 第五个文章的节点 */
.honor-jerry-swiper{
    padding-bottom: 30px;
}
.honor-flex{
    display: flex;
    /*flex-direction: column;*/
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.honor-flex li{
    width: 33.333%;
    margin-bottom: 16px;
}
.honor-flex li img{
    width: 90%;
}
</style>