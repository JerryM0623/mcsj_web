import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// swiper对应的css
import 'swiper/dist/css/swiper.css'
// 引用swiper
Vue.use(VueAwesomeSwiper)

// 引入axios
import axios from "axios";
// 全局注册axios
Vue.prototype.$axios = axios

import AmapVue from '@amap/amap-vue';

AmapVue.config.version = '2.0'; // 默认2.0，这里可以不修改
AmapVue.config.key = 'e8232ff763e974a0b697c76f1be67337';
AmapVue.config.plugins = [
  'AMap.ToolBar',
  // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
];
Vue.use(AmapVue);

// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
