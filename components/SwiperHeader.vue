<template>
  <div class="swiper__header">
    <p class="swiper__header__title">Просмотренные товары</p>
    <div class="swiper__header__buttons-container">
      <button
        @click="swiperr.slidePrev()"
        class="swiper__header__buttons-container__prev"
      ></button>
      <p class="">{{}}</p>
      <button
        @click="swiperr.slideNext()"
        class="swiper__header__buttons-container__next"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
// Import Swiper styles
const swiperr = useSwiper();
</script>

<style lang="css" scoped>
.swiper__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.swiper__header__title {
  color: #1f2432;
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
}

.swiper__header__buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.swiper__header__buttons-container__prev {
  background-image: url(../assets/prev.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border: none;
}

.swiper__header__buttons-container__next {
  background-image: url(../assets/next.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border: none;
}
</style>
