<template>
  <div class="product-detail-top clearfix">
      <div class="product-detail-top-left">
          <img :src="imgUrl" :alt="imgAlt">
      </div>
      <div class="product-detail-top-right">
          <h2 class="title">{{name}}</h2>
          <p v-for="item in topDescribeArr" :key="item" class="describe">{{item}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'ProductDetailTop',
    props:{
        // 图片链接
        imgUrl:{
            type:String,
            reuqired:true
        },
        // 图片标签的alt
        imgAlt:{
            type:String,
            trquired:true
        },
        // 商品名称
        name:{
            type:String,
            required:true
        },
        // 右侧描述信息
        topDescribeArr:{
            type:Array,
            required:true
        }
    }

}
</script>

<style scoped>
.product-detail-top{
    background-color: white;
    width: 100%;
    margin-bottom: 30px;
    /* padding: 30px; */
}
.product-detail-top .product-detail-top-left,
.product-detail-top .product-detail-top-right{
    float: left;
}
.product-detail-top .product-detail-top-left{
    width: 400px;
    padding: 30px;
}
.product-detail-top .product-detail-top-left img{
    width: 100%;
}
.product-detail-top .product-detail-top-right{
    width: calc(100% - 400px);
    padding: 30px 50px 30px 0;
}
.product-detail-top .product-detail-top-right .title{
    font-size: 24px;
    color: #995c40;
    margin-bottom: 30px;
}
.product-detail-top .product-detail-top-right .describe{
    letter-spacing: 1.5px;
    line-height: 2;
    color: #808080;
}
</style>