// part1的swiper的配置对象
const homePart1JerrySwiperOption = {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
  },
  observe:true
}
// part3的swiper的配置对象
const homePart3JerrySwiperOption = {
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  observe:true
}
// part4的swiper配置对象
const homePart4JerrySwiperOption = {
  pagination: {
    el: ".swiper-pagination",
  },
  observe:true
}
// part7的swiper配置对象
const homePart7JerrySwiperOption = {
  pagination: {
    el: ".swiper-pagination",
  },
  observe:true
}

export default {
  homePart1JerrySwiperOption,
  homePart3JerrySwiperOption,
  homePart4JerrySwiperOption,
  homePart7JerrySwiperOption
}