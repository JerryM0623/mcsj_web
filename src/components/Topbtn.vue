<template>
<div v-show="isTopBtnShow" class="top-btn" @click="toTop">
    <img src="../assets/top.jpg" alt="top">
</div>
</template>

<script>
export default {
    name: "Topbtn",
    data(){
        return{
            isTopBtnShow:false
        }
    },
    mounted() {
        window.onscroll = this.getScrollTop;
    },
    methods:{
        toTop(){
            console.log('111')
        },
        getScrollTop(){
            let result;
            if(document.documentElement && document.documentElement.scrollTop){
                result = document.documentElement.scrollTop
            } else if(document.body && document.body.scrollTop){
                result = document.body.scrollTop;
            }
            // console.log(result)
            this.isTopBtnShow = result > 200
        }
    }
}
</script>

<style scoped>
    .top-btn{
        width: 80px;
        height: 80px;
        position: fixed;
        bottom: 60px;
        right: 60px;
        cursor: pointer;
    }
    .top-btn img {
        width: 100%;
        height: 100%;
    }
</style>