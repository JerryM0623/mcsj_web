<template>
<div class="VRshow">
    <iframe src="http://pano.fsepin.com/xbhzt/" frameborder="0"></iframe>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
    name: "VRshow",
    components:{
        Footer
    }
}
</script>

<style scoped>
.VRshow{
    width: 100%;
    height: 1000px;
}
iframe{
    width: 100%;
    height: 100%;
}
</style>