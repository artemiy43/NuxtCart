<template>
  <header class="header">
    <img src="/cart.svg" alt="cart" />
    <div class="header__container">
      <p class="header__text">Ваша корзина</p>
      <p class="header__text header__text_count">
        {{ cartStore.totalCount + " " + "товара" }}
      </p>
      <p class="header__text">{{ cartStore.totalPrice + " ₽" }}</p>
    </div>
  </header>
</template>

<script setup lang="js">
const cartStore = useCartStore();
</script>

<style lang="css">
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}

.header__container {
  margin-left: 10px;
}

.header__text {
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
}

.header__text_count {
  color: #797b86;
}
</style>
