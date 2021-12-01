<template>
  <div class="side-menu">
      <div class="side-menu-top">
          <p class="side-menu-top-chinese-title">{{chineseTitle}}</p>
          <p class="side-menu-top-english-title">{{englishTitle}}</p>
      </div>
      <div class="side-menu-middle">
          <ul class="side-menu-middle-list">
              <li v-for="item in sideMenuList" :key="item.id" class="side-menu-middle-list-item"><span>{{item.content}}</span></li>
          </ul>
      </div>
      <div class="side-menu-bottom">
            <span class="side-menu-bottom-box">
                <span class="side-menu-bottom-img-box"><img src="@/assets/call_phone.png" alt="call_phone"></span>
                <router-link class="side-menu-bottom-join-buttom" to="/contact">立即加盟</router-link>
            </span>
      </div>
  </div>
</template>

<script>
export default {
    name:'SideMenu',
    props:{
        // 中文标题
        chineseTitle:{
            type:String,
            required:true
        },
        // 英文标题
        englishTitle:{
            type:String,
            required:true
        },
        // 列表数组
        sideMenuList:{
            type:Array,
            required:true
        }
    }


}
</script>

<style>
.side-menu{
    width: 100%;
}
.side-menu .side-menu-top{
    height: 150px;
    width: 100%;
    background-color: #101e48;
    text-align: center;
    color: white;
}
.side-menu .side-menu-top .side-menu-top-chinese-title{
    color: #d1a177;
    font-size: 24px;
    padding: 50px 0 14px 0;
}
.side-menu .side-menu-top .side-menu-top-english-title{
    font-size: 12px;
    color: #bfbfbf;
}
.side-menu-middle,
.side-menu-middle .side-menu-middle-list,
.side-menu-middle .side-menu-middle-list .side-menu-middle-list-item{
    width: 100%;
}
.side-menu-middle .side-menu-middle-list .side-menu-middle-list-item{
    height: 60px;
    line-height: 60px;
    text-align: center;
    padding: 0 30px;
    background-color: white;
}
.side-menu-middle .side-menu-middle-list .side-menu-middle-list-item span{
    display: inline-block;
    width: 100%;
    color: black;
    border-bottom: 1px solid #e7e7e7;
}
.side-menu-middle .side-menu-middle-list .side-menu-middle-list-item span:hover{
    color: #d1a177;
    cursor: pointer;
}
.side-menu-middle .side-menu-middle-list .side-menu-middle-list-item:nth-last-child(1) span{
    border: none;
}
.side-menu-bottom{
    width: 100%;
    height: 190px;
    background-image: url('../../assets/backimg.jpg');
}
.side-menu-bottom .side-menu-bottom-box{
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 83px;
    padding: 0 20px;

}
.side-menu-bottom .side-menu-bottom-box .side-menu-bottom-img-box{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.side-menu-bottom .side-menu-bottom-box .side-menu-bottom-img-box img{
    width: 100%;
    vertical-align: middle;
}
.side-menu-bottom .side-menu-bottom-box .side-menu-bottom-join-buttom{
    height: 24px;
    line-height: 24px;
    color: white;
    background-color: #d1a177;
    font-size: 14px;
    padding: 5px 20px;
    border-radius: 30px;
}
</style>