<template>
  <div class="product-detail-bottom">
      <h2 class="title">结构及工艺特性</h2>
      <p class="small-title">STRUCTURE AND PROCESS CHARACTERISTICS</p>
      <p v-for="item in bottomDescribrArr" :key="item" class="describe">{{item}}</p>
      <img class="describe-img" v-show="imgUrl" :src="imgUrl" :alt="imgAlt">
  </div>
</template>

<script>
export default {
    name:'ProductDetailBottom',
    props:{
        // 数据数组
        bottomDescribrArr:{
            type:Array,
            required:true
        },
        // tu片地址
        imgUrl:{
            type:String
        },
        // 图片 alt
        imgAlt:{
            type:String
        }
    }

}
</script>

<style scoped>
.product-detail-bottom{
    background-color: white;
    width: 100%;
    padding: 20px;
}
.product-detail-bottom .title{
    font-size: 16px;
    color: #995c40;
    margin-bottom: 5px;
}
.product-detail-bottom .small-title{
    font-size: 16px;
    color: #bfbfbf;
    margin-bottom: 20px;
}
.product-detail-bottom .describe{
    color: #4c4c4c;
    font-size: 14px;
    letter-spacing: 1.5px;
    line-height: 2;
}
.product-detail-bottom .describe-img{
    width: 100%;
}
</style>