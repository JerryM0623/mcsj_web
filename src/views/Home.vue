<template>
    <div class="home">
<!--        最顶端轮播图-->
        <div class="part1"></div>
<!--        理想生活 焕”星”体验-->
        <HomePage background-color="#ffffff" title="理想生活 焕”星”体验" title-color="black" small-title="凝聚品牌力量，打造优质产品">
            <template v-slot:home-page-content>
                <div class="dec-box">
                    <p>【品牌释义】CIBIVA</p>
                    <p>品牌英文名称蕴含的品牌价值：</p>
                    <p>Contracted Art（简约风尚）、 International（国际品味）、</p>
                    <p>Vogue（极简设计）是星佰汇审美的标准与原则。</p>
                    <p>Brilliant （卓越品质）、 Ingenuity（匠心艺术）是星佰汇人思想源动力</p>
                    <p>而Animate （创新不止）是星佰汇对理想生活的极致追求，是焕新的力量。</p>
                </div>
                <div class="button-box">
                    <span class="button"><router-link to="/about">MORE+</router-link></span>
                </div>
                <div class="list-box clearfix">
                    <ul>
                        <li>
                            <div class="image-box"><img src="../assets/home/part2/img1.png" alt=""></div>
                            <p class="image-title">创造品牌</p>
                            <p class="image-describe">专业致力系统门窗一流品质</p>
                        </li>
                        <li>
                            <div class="image-box"><img src="../assets/home/part2/img2.png" alt=""></div>
                            <p class="image-title">一流品质</p>
                            <p class="image-describe">一丝不苟，精工制造</p>
                        </li>
                        <li>
                            <div class="image-box"><img src="../assets/home/part2/img3.png" alt=""></div>
                            <p class="image-title">技术研发</p>
                            <p class="image-describe">拥有研究中心，不断开拓新产品</p>
                        </li>
                        <li>
                            <div class="image-box"><img src="../assets/home/part2/img4.png" alt=""></div>
                            <p class="image-title">专业服务</p>
                            <p class="image-describe">24小时一站式贴心服务</p>
                        </li>
                    </ul>
                </div>
            </template>
        </HomePage>
<!--        脚踏实地，成就实力门窗品牌-->
        <HomePage background-color="#111e47" title="脚踏实地，成就实力门窗品牌" title-color="#d1a177" small-title="六大“星”助力，福耀“新”未来"></HomePage>
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
import Footer from '@/components/Footer'

export default {
    name: 'Home',
    components: {
        HomePage,
        Footer
    }
}
</script>

<style scoped>
.dec-box p{
    margin-bottom: 26px;
    letter-spacing: 1px;
    line-height: 2;
    font-size: 14px;
}
.button-box {
    margin-bottom: 50px;
}
.button-box .button{
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid rgba(0,0,0,0.2);
}
.button-box .button a{
    color: black;
    font-size: 14px;
    letter-spacing: 2.5px;
}
.button-box .button:hover{
    cursor: pointer;
    background-color: #0e1d48;
}
.button-box .button:hover a{
    color: white;
}
.list-box{
    padding-bottom: 20px;
}
.list-box ul li{
    float: left;
    width: 25%;
}
.list-box ul li .image-box{
    margin-bottom: 10px;
    height: 82px;
}
.list-box ul li .image-box img{
    height: 100%;
    transition: all .7s;
}
.list-box ul li .image-box:hover img{
    transform: rotateY(180deg);
}
.list-box ul li .image-title{
    color: #995c40;
    font-size: 18px;
    margin-bottom: 5px;
}
.list-box ul li .image-describe{
    color: #808080;
    font-size: 14px;
}
</style>