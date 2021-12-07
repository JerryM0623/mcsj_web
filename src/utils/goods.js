/**
 * 这个文件里面的工具函数用于 WindowGoods HouseGoods DoorGoods 三个地方
 */


/**
 * 
 * 本函数用于对传入的 data 数据集进行处理 
 * 生成前端可以使用的数据进行返回
 * 
 * @param {Number} type 表示现在是 window（0） 还是 door（1） 还是 house（2）
 * @param {Object} data 传入的数据集
 * @param {Object} that 传入的vm对象
 */
export default function(type, data, that){

    console.log(type)
    console.log(data)
    console.log(that)

    // 解构赋值
    const {modelOne,modelTwo,modelThree} = data

    // 创建变量
    let newTopArr = []
    let newMiddleArr = []
    let newBottomArr = []

    // 处理过程
    if(type === 0){
        // window
        newTopArr = modelOne.wpMake.split('|')
        newMiddleArr = modelTwo.wpParameter.split('|')
        newBottomArr = modelThree.wpDetails.split('|')
    }
    if(type === 1){
        // door
        newTopArr = modelOne.dpMake.split('|')
        newMiddleArr = modelTwo.dpParameter.split('|')
        newBottomArr = modelThree.dpDetails.split('|')
    }
    if(type === 2){
        // house
        newTopArr = modelOne.rpMake.split('|')
        newMiddleArr = modelTwo.rpParameter.split('|')
        newBottomArr = modelThree.rpDetails.split('|')
    }

    // 更新 data
    that.modelOne = modelOne
    that.modelThree = modelThree
    that.topDescribeArr = newTopArr
    that.middleDescribeArr = newMiddleArr
    that.bottomDescribrArr = newBottomArr
}