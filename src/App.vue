<template>
  <div id="app">
      <header-bar />
      <router-view :customAnchor="customAnchor"></router-view>
      <TopBtn></TopBtn>
  </div>
</template>

<script>
import headerBar from '@/components/HeaderBar.vue'
import TopBtn from '@/components/Topbtn'
export default {
    name: "App",
    components:{
        headerBar,
        TopBtn
    },
    methods:{
        customAnchor(index) {
            const titleElement = document.querySelector(index);
            if (titleElement) titleElement.scrollIntoView();
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
}
html,body{
    font-family: 'Microsoft YaHei','Helvetica Neue','Arial','sans-serif','iconfont','icomoon','FontAwesome','Material Icons Extended';
    min-width: 1300px;
    background-color: #f5f5f5;
}
#app{
    width: 100%;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: white;
}
.clearfix:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    zoom: 1;
}

/* amap 高德地图*/
.label-box{
    width: 430px;
    font-size: 14px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #dcddde;
    line-height: 20px;
}
.amap-marker-label{
    border: none;
    background-color: transparent;
}
</style>
