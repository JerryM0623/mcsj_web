<template>
    <div class="lecture-item">
        <div class="lecture-item-box">
            <div class="lecture-item-left-box">
                <img src="@/assets/business/lecturePic1.jpg" alt="战狼团队">
            </div>
            <div class="lecture-item-right-box">
                <div class="top-box">
                    <p class="top-title">{{lectureItem.teamName}}</p>
                    <p class="top-small-title">{{lectureItem.teamDeclaration}}</p>
                </div>
                <div class="middle-box">
                    <p class="describe">{{lectureItem.teamIntroduce}}</p>
                </div>
                <div class="bottom-box">
                    <p class="bottom-title">课程：</p>
                    <p class="bottom-content">{{lectureItem.teamClass}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LectureItem",
    props:{
        lectureItem:{
            type:Object,
            required:true
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.lecture-item{
    padding: 50px 150px 0;
    background-color: #f5f5f5;
}
.lecture-item:nth-last-child(1){
    margin-bottom: 50px;
}
.lecture-item-box{
    height: 350px;
    width: 100%;
    position: relative;
    background-color: white;
}
.lecture-item-left-box,
.lecture-item-right-box{
    position: absolute;
    top: 0;
    height: 100%;
    padding: 20px;
}
.lecture-item-left-box{
    width: 25%;
    left: 0;
}
.lecture-item-left-box img{
    width: 100%;
    height: 100%;
}
.lecture-item-right-box{
    width: 60%;
    left: 25%;
    line-height: 30px;
    overflow: hidden;

}
.lecture-item-right-box div{
    margin: 30px 0;
}
.top-box .top-title,
.bottom-box .bottom-title{
    color: #d1a177;
    font-weight: 700;
}
.top-box .top-title{
    font-size: 26px;
}
.bottom-box .bottom-content{
    font-size: 15px;
}
.lecture-item-box:hover{
    background-color: #101e48;
}
.lecture-item-box:hover .top-box .top-small-title{
    color: white;
}
.lecture-item-box:hover .middle-box .describe,
.lecture-item-box:hover .bottom-box .bottom-content{
    color: #bfbfbf;
}
.lecture-item-box .bottom-box .bottom-content{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
</style>