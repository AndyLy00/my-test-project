<template>
  <div class="secondCarousel">
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      :transition="500"
    >
      <Slide
        v-for="slide in 3"
        :key="slide"
      >
        <div class="carousel__item">
          <div class="price">
            $ 00
          </div>
          <div class="title">
            1 MONTH
          </div>
          <div class="description">
            Lorem Ipsum is simply dummy text
          </div>
          <div class="circle_button">
            <div class="circle">
              GO
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

</script>

<style lang="scss" scoped>
.secondCarousel{
  margin: 0 auto;
  padding: 140px 20px;
  max-width: 1570px;
  .carousel__slide {
    padding: 5px;
  }

  .carousel__viewport {
    perspective: 2000px;
  }

  .carousel__track {
    transform-style: preserve-3d;
    height: 20rem !important;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.7);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.7);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.75);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.75);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
  }
  .carousel__item {
    display: grid;
    gap: 5px;
    padding: 1.5rem 2rem;
    border-radius: 0.75rem;
    border: 2px solid #CD5B25;
    height: 17rem;
    width: 20rem;
    background-color: var(--white);
    .price {
      color: var(--orange);
      text-align: end;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .title {
      font-size: 1.5rem;
      text-align: start;
    }
    .description {
      font-size: 1.5rem;
      text-align: start;
    }
    .circle_button {
      display: flex;
      justify-content: end;
      .circle {
        justify-self: end;
        width: 3rem;
        height: 3rem;
        background-color: var(--orange);
        border-radius: 50px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }
}

</style>