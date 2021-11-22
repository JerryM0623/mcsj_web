<template>
    <div class="page-control">
        <div class="page-control-box">
            <span @click="prevPage()" class="prev-btn">上一页</span>
            <span class="index-btn">1</span>
            <span @click="nextPage()" class="next-btn">下一页</span>
            <span>共{{pageLength}}条记录</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageControl",
    props:{
        pageLength:{
            type:String,
            required:true
        },
        prevPage:{
            type:Function,
            required:true
        },
        nextPage:{
            type:Function,
            required:true
        },
        currentPageNum:{

        }
    }
}
</script>

<style scoped>
.page-control{
    width: 100%;
    padding: 50px 0;
    background-color: #f5f5f5;
}
.page-control .page-control-box{
    width: 30%;
    /*background-color: pink;*/
    margin: 0 auto;
    text-align: center;
}
.page-control .page-control-box span:nth-child(1),
.page-control .page-control-box span:nth-child(2),
.page-control .page-control-box span:nth-child(3){
    color: black;
    border:  1px solid #dcddde;
    margin-right: 10px;
    padding: 5px 10px;
}
.page-control .page-control-box span:nth-child(1):hover,
.page-control .page-control-box span:nth-child(2):hover,
.page-control .page-control-box span:nth-child(3):hover{
    background-color: #d1a177;
    color: white;
    cursor: pointer;
}
.page-control .page-control-box .index-btn:active{
    background-color: #d1a177;
    color: white;
}
</style>