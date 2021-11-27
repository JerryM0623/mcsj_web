<template>
  <div class="news-box" :style="{border: isBorder ? '1px solid black' : ''}">
    <div class="news-box-top clearfix">
      <div class="news-box-top-date">{{ newsDate }}</div>
      <div class="news-box-top-arrow">
        <img src="@/assets/home/part9/icon1.png" alt="arrow">
      </div>
    </div>
    <div class="news-box-line"></div>
    <div class="news-box-middle">
      <h2 class="news-box-middle-title">{{ newsTitle }}</h2>
      <p class="news-box-middle-text">{{ newsText }}</p>
    </div>
    <div class="news-box-bottom">
      <img :src="newsImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'NewsItem',
  props:{
    newsDate:{
      type:String,
      required:true
    },
    newsTitle:{
      type:String,
      required:true
    },
    newsText:{
      type:String,
      required:true
    },
    isBorder:{
      type:Boolean,
      required:true
    },
    newsImg:{
      type:String,
      required:true
    }
  }

}
</script>

<style scoped>
.news-box{
  width: 100%;
  overflow: hidden;
  padding: 15px;
  background-color: white;
  /* border-radius: 15px; */
  text-align: left;
  transition: all .2s;
  /* background-color: black; */
}
.news-box .news-box-top{
  min-height: 30px;
}
.news-box .news-box-top div:nth-child(1){
  float: left;
}
.news-box .news-box-top div:nth-child(2){
  float: right;
}
.news-box .news-box-top .news-box-top-date{
  margin-bottom: 20px;
  font-size: 22px;
  color: black;
}
.news-box .news-box-top .news-box-top-arrow{
  height: 30px;
  width: 40px;
  padding-right: 10px;
  border-right: 1px solid rgba(255,255,255,.3);
}
.news-box .news-box-top .news-box-top-arrow img{
  height: 100%;
  width: 100%;
}
.news-box .news-box-line{
  height: 1px;
  width: 10%;
  background-color: #b0b0b0;
}
.news-box .news-box-middle .news-box-middle-title{
  min-height: 70px;
  font-weight: 400;
  line-height: 2;
  font-size: 18px;
  letter-spacing: 1.2px;
  margin: 20px 0;
  color: black;
}
.news-box .news-box-middle .news-box-middle-text{
  /* 实现两杠小圆点 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* 其余样式设置 */
  letter-spacing: 1.5px;
  line-height: 2;
  font-size: 14px;
  color: #808080;
}
.news-box .news-box-bottom{
  margin-top: 10px;
  max-height: 140px;
}
.news-box .news-box-bottom img{
  width: 100%;
}

/* 鼠标悬浮样式集 */
.news-box:hover{
  background-color: #d1a177;
}
.news-box:hover .news-box-top .news-box-top-date,
.news-box:hover .news-box-middle .news-box-middle-title{
  color: white;
}
.news-box:hover .news-box-middle .news-box-middle-title{
  font-weight: 700;
}
.news-box:hover .news-box-middle .news-box-middle-text{
  color: #e5e5e5;
}
.news-box:hover .news-box-line{
  width: 100%;
  background-color: rgba(255,255,255,.3);
}
</style>