<script setup lang="ts">
import CartList from "./CartList.vue";
import CartTotal from "./CartTotal.vue";
</script>

<template>
  <div class="cart">
    <CartList />
    <CartTotal />
  </div>
</template>

<style lang="css" scoped>
.cart {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 55px;
}
</style>
