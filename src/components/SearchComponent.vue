<template>
  <div class="main-search">
    <div class="nav__input-block">
      <div class="nav__input">
        <div class="nav__input__name">
          Healthy Pets
        </div>
        <input
          placeholder="Search for..."
          class="search"
        >
      </div>
      <div class="nav__input-button">
        <div class="nav__input-button__border">
          <div class="nav__input-button__circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent"
}
</script>

<style scoped>
.main-search {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 17rem;
  background-color: var(--orange);

  .nav__input-block {
    display: flex;
    gap: 0.7rem;
  }

  .nav__input {
    display: flex;
    max-width: 68rem;
    height: fit-content;
    padding: 1.2rem 4.3rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 1px solid var(--orange);
    background: var(--white);
    align-items: center;
    gap: 2rem;
    box-shadow: 16px 21px 26px 1px rgba(0, 0, 0, 0.25);

    .nav__input__name {
      color: var(--orange);
      text-transform: uppercase;
      font-size: 2.25rem;
      font-style: italic;
      font-weight: 700;
      line-height: normal;
    }

    .search {
      background: none;
      border: none;
      height: 2.5rem;
      margin-bottom: -15px;
    }

    .search::placeholder {
      color: var(--orange);
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      opacity: 0.45;
    }
  }

  .nav__input-button {
    margin: auto 0;
    .nav__input-button__border {
      padding: 1.5rem;
      border-radius: 0.24rem;
      border: 1px solid #CD5B25;
      display: flex;
      justify-content: center;
      background: #D9D9D9;
      box-shadow: 16px 21px 26px 1px rgba(0, 0, 0, 0.25);

      .nav__input-button__circle {
        width: 2rem;
        height: 2rem;
        border: solid 1px var(--orange);
        border-radius: 20px;
      }
    }
  }
}
</style>