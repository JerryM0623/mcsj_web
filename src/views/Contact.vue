<template>
    <div class="contact">
        <Banner>
            <template>
                <img src="../assets/banner5.jpg" alt="轮播图">
            </template>
        </Banner>
        <SubMenu>
            <template>
                <ul>
                    <li @click.prevent="customAnchor('#contact')">联系我们</li>
                </ul>
            </template>
        </SubMenu>
        <div id="contact" class="AMap-container">
            <amap :center="point" :zoom="17">
                <amap-marker :position="point" :label="{ content }"></amap-marker>
                <amap-control-bar></amap-control-bar>
                <amap-hawk-eye></amap-hawk-eye>
                <amap-scale></amap-scale>
                <amap-tool-bar :position="{right:'40px',top:'20px'}"></amap-tool-bar>
            </amap>
        </div>
        <div class="infomation">
            <ContactInfomation v-for="item in infomationList" :key="item.id" :is-text-show="item.isTextShow" :is-q-r-code-show="item.isQRCodeShow">
                <template v-slot:image>
                    <img :src="item.imageUrl" :alt="item.alt">
                </template>
                <template v-slot:text>
                    <p>{{item.text ? item.text:'1'}}</p>
                </template>
                <template v-slot:QRCode>
                    <img :src="item.QRCodeUrl" alt="二维码">
                </template>
            </ContactInfomation>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import SubMenu from "@/components/SubMenu"
import ContactInfomation from "@/components/ContactInfomation";

export default {
    name: "Contact",
    props: {
        customAnchor: {
            type: Function,
            required: true
        }
    },
    components: {
        Banner,
        Footer,
        SubMenu,
        ContactInfomation
    },
    data() {
        return {
            content:`<div class="label-box">
                <p class="label-box-top">佛山市星百汇门窗</p>
                <p class="label-box-bottom">地址：广东省佛山市南海区松岗松夏工业园东风中路10号</p>
                </div>`,
            point:[113.048705, 23.172090],
            infomationList:[
                {
                    id:'001',
                    imageUrl:require('@/assets/contact/adress.png'),
                    alt:'地址',
                    isTextShow:true,
                    text:'地址：广东省佛山市南海区松岗松夏工业园东风中路10号',
                    isQRCodeShow: false
                },
                {
                    id:'002',
                    imageUrl:require('@/assets/contact/phone.png'),
                    alt:'电话',
                    isTextShow:true,
                    text:'24小时招商热线: 400-831-8282',
                    isQRCodeShow: false
                },
                {
                    id:'003',
                    imageUrl:require('@/assets/contact/scan.png'),
                    alt:'地址',
                    isTextShow:false,
                    isQRCodeShow: true,
                    QRCodeUrl:require('@/assets/QRCode.jpg')
                }
            ]
        }
    }
}
</script>

<style scoped>
.AMap-container {
    width: 100%;
    height: 500px;
    padding: 20px 150px;
}
.infomation{
    width: 100%;
    height: 280px;
    padding: 0 150px;
    display: flex;
    margin-bottom: 20px;
}
</style>