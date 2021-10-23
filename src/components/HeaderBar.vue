<template>
    <header class="header">
        <div class="logo">
            <img src="../assets/logo.png">
        </div>
        <ul class="links">
            <li v-for="link in links" :key="link.index"><router-link exact :to="link.path">{{link.text}}</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            links:[
                {
                    path:'/',
                    text:'首 页'
                },
                {
                    path:'/about',
                    text:'关于星佰汇'
                },
                {
                    path:'/product',
                    text:'产品展示'
                },
                {
                    path:'/business',
                    text:'商学院'
                },
                {
                    path:'/consult',
                    text:'媒体咨询'
                },
                {
                    path:'/VRshow',
                    text:'VR展厅'
                },
                {
                    path:'/contact',
                    text:'联系我们'
                }
            ]
        }
    }
}
</script>

<style scoped>
.header{
    height: 100px;
    background-color: #111e47;
    position: relative;
}
.logo{
    position: absolute;
    top: 50px;
    left: 150px;
    transform: translateY(-50%);
    height: 66px;
    width: 270px;
}
.logo img{
    width: 100%;
    height: 100%;
}
ul{
    height: 100px;
    line-height: 100px;
    position: absolute;
    right: 150px;
}
ul li{
    float: left;
    margin: 0 20px;
}
ul li a {
    position: relative;
    font-size: 16px;
    transition: all .3s;
}
.router-link-active{
    color: #d1a177;
}
.router-link-active:before{
    width: 100%;
}
ul li a:before{
    position: absolute;
    left: 0;
    top: 30px;
    content: '';
    width: 0;
    height: 2px;
    background-color: #d1a177;
    transition: all .3s;
}
ul li:hover a{
    color: #d1a177;
}
ul li:hover a:before{
    width: 100%;
}
</style>