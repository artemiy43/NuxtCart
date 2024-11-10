export const useCartStore = defineStore("cartStore", {
  state: () => ({
    items: [
      {
        id: 0,
        name: "Вытяжное устройство G2H",
        description:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "G2H1065",
        quantity: 1,
        price: 12664,
        image: "/item0.png",
      },
      {
        id: 1,
        name: "Вытяжное устройство BXC",
        description:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "G2H1065",
        quantity: 2,
        price: 12664,
        image: "/item1.png",
      },
      {
        id: 2,
        name: "Вытяжное устройство GHN",
        description:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "G2H1065",
        quantity: 1,
        price: 12664,
        image: "/item2.png",
      },
    ],
    installation: false,
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((acc, value) => acc + value.quantity * value.price, 0),
    totalCount: (state) =>
      state.items.reduce((acc, value) => acc + value.quantity, 0),
  },
  actions: {
    addItem(newItem) {
      const itemExist =
        this.items.find((item) => item?.id === newItem?.id) ?? -1;
      if (itemExist === -1) {
        this.items.push({ ...newItem, quantity: 1 });
      } else {
        itemExist.quantity += 1;
      }
    },
    deleteItem(newItem) {
      const itemExist =
        this.items.find((item) => item?.id === newItem?.id) ?? -1;
      if (itemExist === -1) {
        return;
      } else {
        itemExist.quantity -= 1;
        if (itemExist.quantity === 0) {
          this.items = this.items.filter((item) => item.id !== itemExist.id);
        }
      }
    },
    deleteTotalItem(newItem) {
      // const itemExist =
      //   this.items.find((item) => item?.id === newItem?.id) ?? -1;

      this.items = this.items.filter((item) => item.id !== newItem.id);
    },
    clear() {
      this.items = [];
    },
    changeInstallation() {
      this.installation = !this.installation;
    },
  },
});
