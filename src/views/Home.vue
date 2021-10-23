<template>
  <div class="home">
      我是Home页面
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer'
export default {
  name: 'Home',
    components:{
      Footer
    }
}
</script>

<style scoped>

</style>