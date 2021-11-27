<template>
    <div class="footer">
        <div class="footer-box">
            <div class="footer-top"><span>友情链接：</span></div>
            <div class="footer-middle">
                <div class="left-box">
                    <h3>佛山市星佰汇门窗</h3>
                    <p>Add：广东省佛山市南海区松岗松夏工业园东风中路10
                        号&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Tel : 400-831-8282</p>
                </div>
                <div class="right-box">
                    <div class="QRCode-box">
                        <img src="@/assets/QRCode.jpg" alt="二维码">
                    </div>
                    <p>微信公众号</p>
                </div>
            </div>
            <div class="footer-bottom">
                <span>COPYRIGHT (©) 2019 佛山市星佰汇门窗</span>
                <span><a href="#">技术支持：推搜网络</a></span>
                <span><a href="#">备案号:粤ICP备17068488号</a></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer{
    width: 100%;
    background-color: #101e48;
    color: white;
    border-top: 5px solid #d1a177;
}
.footer-box{
    margin: 0 150px;
}
.footer-top{
    height: 60px;
    line-height: 60px;
}
.footer-top span{
    font-size: 14px;
    color: #bfbfbf;
}
.footer-middle{
    position: relative;
    padding-top: 10px;
    height: 80px;
}
.footer-middle .left-box{
    position: absolute;
    left: 0;
}
.footer-middle .left-box h3{
    color: #d1a177;
    margin-bottom: 10px;
}
.footer-middle .left-box p{
    color: #bfbfbf;
    font-size: 16px;
}
.footer-middle .right-box{
    position: absolute;
    right: 20px;
    bottom: 5px;
}
.footer-middle .right-box .QRCode-box{
    height: 80px;
    width: 80px;
}
.footer-middle .right-box .QRCode-box img{
    width: 100%;
    height: 100%;
}
.footer-middle .right-box p{
    font-size: 12px;
    color: white;
    text-align: center;
    margin-top: 10px;
}
.footer-bottom{
    padding: 10px 0;
    color: #bfbfbf;
    border-top: 1px solid rgba(255,255,255,0.2);
}
.footer-bottom span{
    font-size: 14px;
    margin-right: 20px;
}
.footer-bottom span a{
    color: #bfbfbf;
    font-size: 14px;
}
</style>