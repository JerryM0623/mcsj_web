<template>
    <div class="article" :style="{backgroundColor}">
        <div class="article-box">
            <div class="article-title" :style="{color: fontColor}">
                <slot name="title"></slot>
            </div>
            <div class="article-small-title">
                <slot name="small-title"></slot>
            </div>
            <div class="article-content" :style="{color: fontColor}">
                <slot name="content"></slot>
            </div>
            <div class="article-Carousel" v-show="isCarouselShow">
                <slot name="carousel"></slot>
            </div>
            <div class="article-grid" v-show="isGridShow">
                <slot name="grid"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Artical",
    props: {
        backgroundColor:{
            required:true,
            type:String
        },
        fontColor:{
            required: true,
            type:String
        },
        isCarouselShow:{
            type:Boolean,
            required:true
        },
        isGridShow:{
            type:Boolean,
            required:true
        }
    },
    mounted() {
        this.dispatch('bdhewjbd',sdbqahjd)
    }
}
</script>

<style scoped>
/*.artical{*/
/*    background-color: #f5f5f5;*/
/*}*/
.article-box{
    margin: 0 150px;
    padding: 90px 0;
}
.article-title p{
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 5px;
}
.article-small-title{
    border-bottom: 2px solid #bfbfbf;
    padding-bottom: 10px;
}
.article-small-title p{
    font-size: 12px;
    color: #bfbfbf;
    font-weight: 700;
}
.article-content{
    margin-top: 50px;
}
.article-content p{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
    letter-spacing: 1px;
}
.article-Carousel{
    margin-top: 40px;
}
.article-grid{
    width: 100%;
    border: 1px solid #404b6d;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
}
</style>