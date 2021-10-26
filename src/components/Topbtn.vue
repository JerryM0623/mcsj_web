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
            // 首先获取现在的值
            let topValue = this.getScrollTop();
            // 运行
            if (topValue > 0){
                // 设计定时器滚回顶部
                let timer = setInterval(() => {
                    console.log('定时器持续开启中')
                    if (topValue > 0) {
                        topValue -= 100;
                        if (document.documentElement && document.documentElement.scrollTop) {
                            document.documentElement.scrollTop = topValue;
                        } else if (document.body && document.body.scrollTop) {
                            document.body.scrollTop = topValue;
                        }
                    }else{
                        clearInterval(timer)
                    }
                },10)
            }
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
            return result;
        }
    }
}
</script>

<style scoped>
    .top-btn{
        width: 80px;
        height: 80px;
        position: fixed;
        bottom: 68px;
        right: 60px;
        cursor: pointer;
    }
    .top-btn img {
        width: 100%;
        height: 100%;
    }
</style>