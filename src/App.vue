<template>
  <div id="app">
      <header-bar />
      <router-view></router-view>
      <Topbtn></Topbtn>
  </div>
</template>

<script>
import headerBar from '@/components/HeaderBar.vue'
import Topbtn from '@/components/Topbtn'
export default {
    name: "App",
    components:{
        headerBar,
        Topbtn
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-size: 20px;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: white;
}
</style>
