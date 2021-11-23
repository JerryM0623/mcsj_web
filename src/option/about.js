// 表示第一个文章节点的轮播图的配置
const firstJerrySwiperOption = {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
}
// 表示第四个文章节点的轮播图的配置
const courseJerrySwiperOption = {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
}
// 表示第五个文章节点的轮播图的配置
const honorJerrySwiperOption = {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
}

export default {
    firstJerrySwiperOption,
    courseJerrySwiperOption,
    honorJerrySwiperOption
}