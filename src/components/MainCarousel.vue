<template>
  <div class="main-carousel">
    <div class="main-carousel__text">
      <div class="title">
        Lorem Ipsum
      </div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </div>
    <!--    <VueSlickCarousel v-bind="settings">-->
    <!--      :arrows="true"-->
    <!--      :dots="true"-->
    <!--      >-->
    <!--      <div>1</div>-->
    <!--      <div>2</div>-->
    <!--      <div>3</div>-->
    <!--      <div>4</div>-->
    <!--    </VueSlickCarousel>-->
    <div class="my-carousel">
      <carousel
        :items-to-show="3.5"
        :items-to-scroll="1"
        :wrap-around="true"
      >
        <slide
          v-for="slide in 8"
          :key="slide"
          :slide-width="500"
        >
          <div class="col" />
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
      <div class="home_buttons">
        <Button
          type="text"
          class="home__button"
        >
          Lorem Ipsum
        </Button>
        <Button
          type="text"
          class="home__button"
        >
          Lorem Ipsum
        </Button>
        <Button
          type="text"
          class="home__button"
        >
          Lorem Ipsum
        </Button>
        <Button
          type="text"
          class="home__button"
        >
          Lorem Ipsum
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import {Button} from "ant-design-vue";
</script>

<style scoped>
.main-carousel {
  padding: 140px 20px;
  max-width: 1570px;
  margin: 4.75rem auto 0;
  .main-carousel__text {
    margin: 0 auto;
    max-width: 40rem;
    display: grid;
    gap: 1.5rem;
  }
  .my-carousel {
    max-width: 88rem;
    margin: 4.5rem auto 0;

  }
}

.col {
  padding: 0 10px;
  width: 20rem;
  height: 18rem;
  background-image: url("../assets/images/test.jpg");
  background-position: center;
  background-size: cover;
}
.home_buttons {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  .home__button {
    display: flex;
    align-items: center;
    border: solid 1px var(--orange);
    padding: 1.5rem 3rem;
    color: var(--orange);
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>