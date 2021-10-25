import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// swiperu对应的css
import 'swiper/dist/css/swiper.css'
// 引用swiper
Vue.use(VueAwesomeSwiper)
// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
