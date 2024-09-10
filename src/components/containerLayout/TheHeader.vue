<template>
  <header class="header">
    <a href="/" class="header__logo-link">
      <p class="header__brand">Ekaseya</p>
    </a>
    <nav class="header__nav">
      <a href="#" class="header__nav-item">Каталог</a>
      <a href="#" class="header__nav-item">Доставка и оплата</a>
      <a href="#" class="header__nav-item">Контакты</a>
      <a href="#" class="header__nav-item">О нас</a>
    </nav>
    <div class="header__actions">
      <a href="#" class="header__favorites">
        <span class="header__icon header__icon--fav"></span>
      </a>
      <a href="#" class="header__cart">
        <span class="header__icon header__icon--cart"></span>
      </a>
      <a href="#" class="header__search">
        <span class="header__icon header__icon--search"></span>
      </a>
    </div>
  </header>
</template>
<script></script>
<style lang="scss">
@import '../../assets/main.scss';

.header {
  box-sizing: border-box;
  position: fixed;
  margin: 0;
  padding: 0 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  width: 100%;
  background-color: $white;
  border-bottom: 1px solid transparent;

  &__nav {
    display: flex;
    gap: 26px;
  }

  &__nav-item {
    font-size: 20px;
    line-height: 26px;

    &:hover {
      opacity: 0.5;
    }
  }

  &__brand {
    font-size: 25px;
    line-height: 32px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 23px;
  }

  &__icon {
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 23px;
    height: 23px;

    &:hover {
      opacity: 0.5;
    }

    &--fav {
      background-image: url(@/assets/vendor/images/fav.svg);
    }

    &--cart {
      background-image: url(@/assets/vendor/images/cart.svg);
    }

    &--search {
      background-image: url(@/assets/vendor/images/search.svg);
    }
  }
}
</style>
