<script setup>
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <div class="container">
    <div class="nav">
      <div class="nav__first-block">
        <div class="nav__logo">
          LOGO
        </div>
        <div class="nav__input-block">
          <div class="nav__input">
            <div>Healthy Pets</div>
            <input placeholder="Search for...">
          </div>
          <div class="nav__input-button">
            <div class="nav__input-button__border">
              <div class="nav__input-button__circle" />
            </div>
          </div>
        </div>
      </div>
      <button
        class="nav__logout"
      >
        SIGN IN
      </button>
    </div>
    <div class="pages">
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.pages {
  flex-grow: 1;
}

.nav {
  width: 100%;
  padding: 30px 20px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  z-index: 50;
}
.nav__first-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  gap: 2rem;
}
.nav__logo {
  color: #000;
  font-size: 50.331px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.nav__input-block {
  display: flex;
  gap: 0.7rem;
}
.nav__input {
  display: flex;
  max-width: 26rem;
  height: fit-content;
  padding: 0.5rem 1.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--orange);
  background: var(--white);
  align-items: center;
  gap: 2rem;

  div {
    color: var(--orange);
    text-transform: uppercase;
    font-size: 0.87rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
  }

  input {
    background: none;
    border: none;
  }

  input::placeholder {
    color: var(--orange);
    font-size: 0.87rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.45;
  }
}
.nav__input-button {
  max-width: 3.2rem;
  flex-shrink: 0;
  .nav__input-button__border {
    padding: 0.55rem;
    border-radius: 0.24rem;
    border: 1px solid #CD5B25;
    display: flex;
    justify-content: center;
    .nav__input-button__circle {
      width: 1rem;
      height: 1rem;
      border: solid 1px var(--orange);
      border-radius: 20px;
    }
  }
}
.nav__logout {
  color: var(--black);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}
</style>