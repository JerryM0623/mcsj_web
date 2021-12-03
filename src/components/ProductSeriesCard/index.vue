<template>
<!--  -->
    <div class="product-series-card">
        <span
            @click="handlerClick(type.id,$event)"
            class="product-series-card-item"
            :class="isActive[type.type] ? 'item-active':''"
            v-for="type in typeList"
            :key="type.id"
            >{{ type.type }}</span
        >
    </div>
</template>

<script>
export default {
    name: "ProductSeriesCard",
    props: {
        // 分类列表，由父组件传递
        typeList: {
            type: Array,
            required: true,
        },
        // 根据 id 获取数据的函数
        getDataListById:{
            type:Function,
            required:true
        }
    },
    data(){
        return{
            // 控制按钮是否 active
            isActive:{}
        }
    },
    methods:{
        handlerClick(id,event){
            // 阻止请求多发
            if( this.isActive[event.target.innerHTML] === false ){
                // 清空所有的 active 状态
                for (const key in this.isActive) {
                    if (Object.hasOwnProperty.call(this.isActive, key)) {
                        this.isActive[key] = false
                    }
                }

                // 当前按钮激活 active
                this.isActive[event.target.innerHTML] = true

                // 调用父元素进行数据请求
                this.getDataListById(id)
            }
        }
    },
    watch:{
        // 监视 typeList
        typeList(newValue){
            // 一旦发生变动就重新生成 this.isActive 数组
            let newObj = {}
            newValue.forEach(item => {
                newObj[item.type] = false
            })

            // 让默认的选中分类激活 active
            newObj[newValue[0].type] = true

            // 更新 data
            this.isActive = newObj
        }
    }
};
</script>

<style scoped>
.product-series-card {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
}
.product-series-card .product-series-card-item {
    background-color: white;
    border-right: 2px solid #e7e7e7;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    transition: all 0.2s;
}
.product-series-card .product-series-card-item:nth-last-child(1) {
    border: none;
}
.product-series-card .product-series-card-item:hover,
.product-series-card .item-active {
    background-color: #101e48;
    color: #d1a177;
    cursor: pointer;
}
</style>