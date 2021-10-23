<template>
    <div class="sub-menu">
        <div class="sub-menu-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubMenu"
}
</script>

<style scoped>
.sub-menu{
    width: 100%;
    height: 80px;
    background-color: white;
    line-height: 80px;
    text-align: center;
    /*padding: 0 150px;*/
}
.sub-menu .sub-menu-box{
    /*background-color: pink;*/
    height: 100%;
    margin: 0 150px;
}
.sub-menu .sub-menu-box ul{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.sub-menu .sub-menu-box ul li{
    /*max-width: 150px;*/
    font-size: 16px;
    width: 100%;
    padding: 0 20px;
    transition: background-color .5s;
    cursor: pointer;
    /*border-right: 2px dashed  #bfbfbf;*/
}
.sub-menu .sub-menu-box ul li:hover,
.sub-menu .sub-menu-box ul li:active{
    background-color: #d1a177;
    color: white;
}
</style>