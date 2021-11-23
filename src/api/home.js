import Axios from "../utils/Axios";

function getCarousel(){
  return Axios.get('/index/RotationOne')  
}
function get401(){
  return Axios.get('/index/RotationOne')  
}
function get403(){
  return Axios.get('/index/RotationOne')  
}
function get404(){
  return Axios.get('/index/RotationTwo432432')  
}

export default {
  getCarousel,
  get401,
  get403,
  get404
}