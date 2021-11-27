import axios from "axios";

// 创建一个全新的 axios
const Axios = axios.create({});

// 基础配置设置
Axios.defaults.baseURL='http://192.168.1.126:8081'
Axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// Axios.interceptors.request.use(config => {
//   // 表示能成功发送
//   return config;
// },error => {
//   // 表示不能成功发送
//   alert('请求失败~')
//   return Promise.reject(error)
// })

// 响应接收器
// 这边返回出来的数据用 then 就能取出
Axios.interceptors.response.use(response => {
  // 返回的 status 在200-300 之间
  return response.data;
},error => {
  return error;
})

export default Axios;
