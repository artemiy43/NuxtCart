<template>
  <div class="cartList">
    <div class="cartList__header">
      <div class="cartList__header__container">
        <p class="cartList__header__title">Ваша корзина</p>
        <p class="cartList__header__subtitle">
          {{ cartStore.totalCount + " " + "товара" }}
        </p>
      </div>
      <p class="cartList__header__clear" @click="cartStore.clear()">
        Очистить корзину
      </p>
    </div>
    <ul class="cartList__list">
      <li v-for="item in cartStore.items" class="cartList__list__item">
        <img :src="item.image" alt="image" class="cartList__list__item__img" />
        <div class="cartList__list__item__description">
          <p class="cartList__list__item__description_name">{{ item.name }}</p>
          <p class="cartList__list__item__description_text">
            {{ item.description }}
          </p>
          <p class="cartList__list__item__description_article">
            {{ item.article }}
          </p>
        </div>
        <div class="cartList__list__item__container">
          <div class="cartList__list__item__container__counter">
            <button
              class="cartList__list__item__counter"
              @click="cartStore.deleteItem(item)"
            >
              -
            </button>
            <p class="cartList__list__item__counter_number">
              {{ item.quantity }}
            </p>
            <button
              @click="cartStore.addItem(item)"
              class="cartList__list__item__counter"
            >
              +
            </button>
          </div>
          <p
            v-if="item.quantity > 1"
            class="cartList__list__item__counter__price"
          >
            {{ item.price + "/" + "шт." }}
          </p>
        </div>
        <p class="cartList__list__item__totalPrice">
          {{ item.price * item.quantity + " ₽" }}
        </p>
        <button
          class="cartList__list__item_delete"
          @click="cartStore.deleteTotalItem(item)"
        ></button>
      </li>
    </ul>
    <div class="cartList__installation">
      <input
        type="checkbox"
        class="cartList__installation__chechbox"
        :value="cartStore.installation"
        @input="cartStore.changeInstallation"
      />
      <img
        src="/public/installation.svg"
        alt="image"
        class="cartList__installation__image"
      />
      <div class="cartList__installation__text_container">
        <p class="cartList__installation__text_title">Установка</p>
        <p class="cartList__installation__text_subtitle">
          Отметьте, если Вам необходима консультация профессионала по монтажу
          выбранных товаров.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
const cartStore = useCartStore();
</script>

<style lang="css" scoped>
.cartList {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cartList__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cartList__header__container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  text-align: end;
}
.cartList__header__title {
  font-weight: 700;
  font-size: 44px;
  line-height: 53px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: end;
}
.cartList__header__subtitle {
  color: #797b86;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 5px;
}
.cartList__header__clear {
  color: #797b86;
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-top: 10px;
}
.cartList__header__clear:hover {
  cursor: pointer;
}

.cartList__list {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.cartList__list__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cartList__list__item__img {
  width: 100px;
  height: 100px;
}

.cartList__list__item__totalPrice {
  font-weight: 600;
}

.cartList__list__item__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cartList__list__item__container__counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cartList__list__item__counter__price {
  margin: 0;
  padding: 0;
}

.cartList__list__item_delete {
  background-image: url(../assets/close.svg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  border: none;
  align-self: flex-start;
}
.cartList__list__item_delete:hover {
  cursor: pointer;
}

.cartList__list__item__description_name {
  color: #1f2432;
  font-family: "Lato";
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  padding: 0;
}

.cartList__list__item__description_text {
  color: #2c3242;
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  margin: 0;
  padding: 0;
}
.cartList__list__item__description_article {
  color: #797b86;
  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding: 0;
}

.cartList__list__item__counter {
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 5px;
  border: none;
  color: #33374e;
  font-size: 20px;
}

.cartList__installation {
  width: 100%;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 25px;
  box-sizing: border-box;
}

.cartList__installation__image {
  padding: 10px;
  background-color: white;
  border-radius: 5px;
}

.cartList__installation__text_container {
  font-family: "Lato";
}
.cartList__installation__text_title {
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  padding: 0;
}
.cartList__installation__text_subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding: 0;
  color: #797b86;
  text-wrap: nowrap;
}

.cartList__installation__chechbox {
  width: 20px;
  height: 20px;
}
</style>
