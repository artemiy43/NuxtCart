<template>
  <template>
    <div class="swiperr__header">
      <p class="swiperr__header__title">Просмотренные товары</p>
      <div class="swiperr__header__buttons-container">
        <button
          @click="prevSlideClick(swiperEl)"
          class="swiperr__header__buttons-container__prev"
        ></button>
        <p class="">
          {{ currIndex + "/" + (items.length - slidesPerView + 1) }}
        </p>
        <button
          @click="nextSlideClick(swiperEl)"
          class="swiperr__header__buttons-container__next"
        ></button>
      </div>
    </div>
  </template>
  <swiper-container
    :slides-per-view="slidesPerView"
    space-between="60"
    ref="swiper"
  >
    <swiper-slide v-for="item in items">
      <div class="swiperr__slide">
        <img :src="item.img" class="swiperr__slide__img" />
        <p class="swiperr__slide__name">{{ item.name }}</p>
        <p class="swiperr__slide__description">{{ item.description }}</p>
        <p class="swiperr__slide__prices">{{ item.prices }}</p>
        <p class="swiperr__slide__pricesEu">{{ item.pricesEu }}</p>
        <button class="swiperr__slide__button">Подробнее</button>
      </div>
    </swiper-slide>
  </swiper-container>
</template>
<script setup>
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { items } from "~/mocks/SwiperItems";
// register Swiper custom elements

const swiperEl = useTemplateRef("swiper");

// swiperEl.swiper.slideNext();
//console.log(swiperEl?.swiper?.activeIndex);
const slidesPerView = 4;
const currIndex = ref(1);
const prevSlideClick = (swiperEl) => {
  swiperEl?.swiper?.slidePrev();
  if (currIndex.value > 1) currIndex.value--;
};
const nextSlideClick = (swiperEl) => {
  if (swiperEl?.swiper?.progress < 1) currIndex.value++;
  swiperEl?.swiper?.slideNext();
  console.log(swiperEl?.swiper?.progress);
};
register();
</script>

<style lang="css" scoped>
.swiperr__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.swiperr__header__title {
  color: #1f2432;
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
}

.swiperr__header__buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.swiperr__header__buttons-container__prev {
  background-image: url(../assets/prev.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border: none;
}

.swiperr__header__buttons-container__next {
  background-image: url(../assets/next.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border: none;
}

.swiperr__slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1f2432;
  font-family: "Lato";
  height: 560px;
}

.swiperr__slide__img {
  width: 200px;
  height: 200px;
}

.swiperr__slide__name {
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  align-self: start;
  margin: 20px 0 20px 0;
}
.swiperr__slide__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  align-self: start;
  margin: 0 0 60px 0;
}
.swiperr__slide__prices {
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  align-self: start;
  margin: 0;
}
.swiperr__slide__pricesEu {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: #797b86;
  align-self: start;
  margin: 0;
}

.swiperr__slide__button {
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
  font-size: 18px;
  line-height: 26px;
  font-weight: 600px;
  border: none;
  padding: 14px;
  margin-bottom: 12px;
  box-sizing: border-box;
  color: white;
  background-color: #0069b4;
  margin-top: 20px;
}
</style>
