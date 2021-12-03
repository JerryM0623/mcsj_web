<template>
    <div class="product-item">
        <!-- 图片 -->
        <div class="product-item-img-box">
            <img :src="dataItem.imgUrl" :alt="dataItem.imgAlt" />
            <!-- 蒙层 -->
            <div class="product-item-mask">
                <div class="product-item-mask-img-box">
                    <img src="@/assets/productItem/add.png" alt="add.png" />
                </div>
            </div>
        </div>
        <!-- 文本 -->
        <div class="product-item-text">{{ dataItem.describe }}</div>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        dataItem: {
            typr: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.product-item {
    float: left;
    width: 290px;
    margin-bottom: 40px;
    margin-right: 20px;
}
.product-item .product-item-img-box,
.product-item .product-item-img-box img {
    width: 100%;
    height: 100%;
}
.product-item .product-item-img-box {
    height: 200px;
    position: relative;
}



.product-item .product-item-img-box .product-item-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    transition: all .3s;
}
.product-item .product-item-img-box .product-item-mask .product-item-mask-img-box{
    width: 30px;
    height: 30px;
    margin-top: 85px;
    margin-left: 130px;
}
.product-item .product-item-img-box .product-item-mask .product-item-mask-img-box img{
    width: 100%;
    height: 100%;
}
.product-item:hover{
    cursor: pointer;
}
.product-item:hover .product-item-img-box .product-item-mask{
    opacity: 1;
}



.product-item .product-item-text {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: black;
    background-color: white;
}
</style>