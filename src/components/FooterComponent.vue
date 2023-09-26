<template>
  <div class="footer">
    <div class="footer__info">
      <div class="logo">
        LOGO
      </div>
      <div class="menu">
        <div class="link">
          <router-link :to="{ name: 'home'}">
            Home
          </router-link>
        </div>
        <div class="link">
          <router-link :to="{ name: 'shop'}">
            Shop
          </router-link>
        </div>
        <div class="link">
          Media
        </div>
        <div class="link">
          Contact US
        </div>
        <div class="link">
          Sign In
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--orange);
  .footer__info {
    height: 10rem;
    padding: 3rem 20px;
    max-width: 1570px;
    display: flex;
    justify-content: space-between;
    .logo {
      color: #000;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
    .menu {
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 7rem;
      .link {
        color: var(--black);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}
</style>