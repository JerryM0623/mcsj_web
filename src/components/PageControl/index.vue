<template>
    <div class="page-control">
        <ul class="page-control-box clearfix">
            <li @click="handlerPrev" class="prev-btn">上一页</li>
            
            <li 
                v-for="(item,index) in pageNumList" 
                :key="item.id" 
                :class="currentPageIndex === (index+1) ? 'active' : ''"
                @click="handlerClick(item.content,$event)"
            >{{ item.content }}</li>

            <li @click="handlerNext" class="next-btn">下一页</li>
            <li>共{{total}}条记录</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PageControl",
    props:{
        // 由父组件传递进来的数据，代表数据库中有多少条数据
        total:{
            type:Number,
            required:true
        },
        // 控制小方块生成的数组
        pageNumList:{
            type:Array,
            required:true
        },
        // 当前正在展示的页数
        currentPageIndex:{
            type:Number,
            required:true
        },
        // 获取指定页面的新闻
        getSpecifiedPageNews:{
            type:Function,
            required:true
        },
        // 获取下一个页面的新闻
        getNextPageNews:{
            type:Function,
            required:true
        },
        // 获取上一个页面的新闻
        getPrevPageNews:{
            type:Function,
            required:true
        }

    },
    mounted(){
    },
    methods:{
        /**
         * 处理点击数组选项事件
         * index: 当前被点击选项块的页面标识
         */
        handlerClick(index,event){
            if(event.target.className !== 'active'){
                // 传递给父组件进行事件处理
                this.getSpecifiedPageNews(parseInt(index));
            }
        },
        /**
         * 处理点击下一页事件
         * index: 当前被点击选项块的页面标识
         */
        handlerNext(){
            // 传递给父组件进行事件处理
            this.getNextPageNews();
        },
        /**
         * 处理点击上一页事件
         * index: 当前被点击选项块的页面标识
         */
        handlerPrev(){
            // 传递给父组件进行事件处理
            this.getPrevPageNews();
        }
    }
}
</script>

<style scoped>
.page-control{
    text-align: center;
    margin-bottom: 50px;
    padding: 0 150px;
}
.page-control-box li{
    float: left;
    padding: 5px 10px;
    border: 2px solid #ededed;
    color: #c0bfbf;
    margin-right: 10px;
}
.page-control-box li:nth-last-child(1){
    color: black;
    border: none;
    margin: 0;
    line-height: 1.5;
}
.page-control-box li:hover{
    border: 2px solid #d1a177;
    color:white;
    background-color: #d1a177;
    cursor: pointer;
}
.page-control-box li:nth-last-child(1):hover{
    color: black;
    border: none;
    margin: 0;
    background-color: transparent;
}
.page-control .page-control-box .active{
    border: 2px solid #d1a177;
    color:white;
    background-color: #d1a177;
}
</style>