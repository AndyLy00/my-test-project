<template>
  <div class="shop">
    <div class="shop__text">
      <div class="title">
        Lorem Ipsum
      </div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </div>
    <div class="filter">
      <Button
        type="default"
        class="first_button"
      >
        All Filters
      </Button>
      <Button
        type="text"
        class="another_button"
      >
        Brands
      </Button>
      <Button
        type="text"
        class="another_button"
      >
        Animal species
      </Button>
      <Button
        type="text"
        class="another_button"
      >
        Product class
      </Button>
    </div>
    <div class="shop__objects">
      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>

      <div class="shop__object">
        <div class="shop__object__image" />
        <div class="shop__object__firstLine">
          <div class="title">
            Lorem Ipsum
          </div>
          <div class="shop__object__price">
            $ 00
          </div>
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Button} from "ant-design-vue";
</script>

<style lang="scss" scoped>
.shop {
  padding: 140px 20px;
  max-width: 1570px;
}
.shop__text {
  display: grid;
  justify-content: center;
}
.filter {
  margin: 4rem 0 6rem 0;
  display: flex;
  justify-content: space-between;
}
.first_button {
  width: 18rem;
  background-color: var(--orange);
  color: white;
  :hover {
    color: white;
    border-color: white;
  }
  :active {
    color: white;
    border-color: white;
  }
}
.another_button {
  width: 18rem;
}
.shop__objects {
  display: grid;
  justify-content: center;
  grid-template-columns: 22rem 22rem 22rem 22rem;
}
.shop__object {
  max-width: 20rem;
  display: grid;
  justify-content: center;
  gap: 20px;
  margin: 2rem;
  .shop__object__image {
    width: 20rem;
    height: 17rem;
    background-image: url("../assets/images/test.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 10px;
  }
  .shop__object__firstLine {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 1.6rem;
      color: var(--black);
    }
    .shop__object__price {
      color: var(--orange);
      text-align: center;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .description {
    font-size: 1.6rem;
    color: var(--black);
    text-align: start;
  }
}
@media only screen and (max-width: 1440px) {
  .shop__objects {
    grid-template-columns: 22rem 22rem 22rem;
  }
}
@media only screen and (max-width: 1100px) {
  .shop__objects {
    grid-template-columns: 22rem 22rem ;
  }
}
</style>