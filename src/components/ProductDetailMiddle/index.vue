<template>
  <div class="product-detail-middle">
      <h2 class="title">产品参数</h2>
      <p class="small-title">PRODUCT PARAMETERS</p>
      <p v-for="item in middleDescribeArr" :key="item" class="describe">{{item}}</p>
  </div>
</template>

<script>
export default {
    name:'ProductDetailMiddle',
    props:{
        // 数据数组
        middleDescribeArr:{
            type:Array,
            required:true
        }
    }

}
</script>

<style scoped>
.product-detail-middle{
    background-color: white;
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;
}
.product-detail-middle .title{
    font-size: 16px;
    color: #995c40;
    margin-bottom: 5px;
}
.product-detail-middle .small-title{
    font-size: 16px;
    color: #bfbfbf;
    margin-bottom: 20px;
}
.product-detail-middle .describe{
    color: #4c4c4c;
    font-size: 14px;
    letter-spacing: 1.5px;
    line-height: 2;
}
</style>