<template>
  <div id="app">
      <header-bar />
      <router-view></router-view>
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
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-size: 16px;
}
html,body{
    font-family: 'Microsoft YaHei','Helvetica Neue','Arial','sans-serif','iconfont','icomoon','FontAwesome','Material Icons Extended';
    min-width: 1300px;
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
</style>
