<template>
    <div class="contact-infomation">
        <div class="contact-infomation-box">
            <div class="image-box">
                <slot name="image"></slot>
            </div>
            <div v-show="isTextShow" class="text-box">
                <slot name="text"></slot>
            </div>
            <div v-show="isQRCodeShow" class="QRCode-box">
                <slot name="QRCode"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactInfomation",
    props:{
        isQRCodeShow:{
            required:true,
            type:Boolean
        },
        isTextShow:{
            required: true,
            type:Boolean
        }
    }
}
</script>

<style scoped>
.contact-infomation{
    width: 33.33%;
    height: 100%;
    background-color: white;
}
.contact-infomation .contact-infomation-box{
    width: 100%;
    height: 100%;
    font-size: 20px;
    position: relative;
    padding-top: 40px;
    text-align: center;
}
.contact-infomation .contact-infomation-box .image-box{
    /*display: inline;*/
    /*width: 40px;*/
    height: 40px;
}
.contact-infomation .contact-infomation-box .image-box img{
    width: 40px;
    height: 100%;
}
.contact-infomation .contact-infomation-box .text-box{
    margin-top: 20px;
}
.contact-infomation .contact-infomation-box .text-box p{
    font-size: 18px;
    padding: 0 30px;
    line-height: 30px;
}
.contact-infomation .contact-infomation-box .QRCode-box{
    height: 150px;
    margin-top: 20px;
}
.contact-infomation .contact-infomation-box .QRCode-box img{
    width: 150px;
    height: 100%;
}
</style>