<template>
  <div class="home">
    <div class="home__text">
      <div class="home__main-title">
        <div class="text__1">
          Your
        </div>
        <div class="text__2">
          Pet
        </div>
        <div class="text__3_1">
          ,
        </div>
        <div class="text__3_2">
          Our
        </div>
        <div class="text__4">
          Passion
        </div>
      </div>
      <div class="home__simple-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <Button
        type="text"
        class="home__button"
      >
        Lorem Ipsum
      </Button>
    </div>
    <div class="cat" />
    <div class="line" />
  </div>
</template>

<script setup>
import {Button} from "ant-design-vue";

</script>

<style lang="scss">
.home {
  padding: 140px 20px;
  max-width: 1570px;
  height: 50rem;
  width: 100%;
  position: relative;
  margin: 0 auto;

  .home__text {
    margin-top: 6rem;
    position: absolute;
    color: var(--black);
    z-index: 10;

    .home__main-title {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      font-size: 6vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.2rem;
      text-transform: uppercase;

      div {
        margin: 0 1rem;
      }

      .text__2 {
        color: var(--orange);
      }

      .text__4 {
        color: var(--white);
      }
    }

    .home__simple-text {
      margin: 3rem 0;
      color: var(--black);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      max-width: 35rem;
      p {
        margin: 1.5rem 0;
      }
    }
    .home__button {
      display: flex;
      align-items: center;
      border: solid 1px var(--orange);
      padding: 2rem 3rem;
      color: var(--orange);
      text-align: center;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .cat {
    position: absolute;
    right: 20px;
    border-radius: 10px;
    width: 40rem;
    height: 32rem;
    background-image: url("../assets/images/cat.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .line {
    position: absolute;
    width: calc(100% - 40px);
    height: 1px;
    border: solid 1px var(--orange);
    bottom: 0;
  }
}
</style>