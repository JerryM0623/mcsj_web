import Axios from "../utils/Axios";

function getCarousel(){
  return Axios.get('/index/RotationOne')  
}

export default {
  getCarousel
}