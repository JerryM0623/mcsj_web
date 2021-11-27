<template>
    <div class="home-page" :style="{backgroundColor}">
        <div class="home-page-box">
<!--            title-->
            <div class="title-box">
                <h1 :style="{color:titleColor}">{{title}}</h1>
            </div>
<!--            line-->
            <div class="line-box">
                <img src="@/assets/home/line.png" alt="">
            </div>
<!--            small-title-->
            <div class="small-title-box">
                <p>{{smallTitle}}</p>
            </div>
<!--            pig || swiper-->
            <div class="content-box">
                <slot name="home-page-content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    props:{
        title:{
            required:true,
            type:String
        },
        titleColor:{
            required:true,
            type:String
        },
        smallTitle:{
            required: true,
            type:String
        },
        backgroundColor:{
            type:String
        }
    }
}
</script>

<style scoped>
h1{
    padding: 20px 0 5px 0;
    margin: 0;
}
.home-page{
    text-align: center;
    padding: 0 150px 40px;
    min-height: 650px;
}
.line-box{
    padding-bottom: 5px;
}
.small-title-box{
    padding-bottom: 40px;
}
.small-title-box p{
    color: #808080;
    font-size: 16px;
}
</style>