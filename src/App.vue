<template>
  <div class="bg-yellow-100">
    <my-header :cartCount="cartCount"></my-header>
    <my-nav-bar :location="currentLocation"></my-nav-bar>
    <my-spinner v-if="isLoading"></my-spinner>
    <router-view
      :cartContents="currentCart"
      @updateCart="updateCart"
      @removeItem="removeCartItem"
      @clearCartContents="clearCart"
      @reduceItem="decrement"
      @addItem="increment"
      @productEdit="editProduct"
      @apiCallMade="loadSpinner"
      @apiCallCompleted="removeSpinner"
    ></router-view>
  </div>
</template>

<script>
import MySpinner from './components/UI/MySpinner.vue'

export default {
  name: "App",
  data() {
    return {
      currentCart: [],
      currentLocation: "",
      isLoading: false
    };
  },
  components: {MySpinner},
  methods: {
    editProduct(id, product) {
      this.$router.push({
        name: 'edit',
        params: {id: id},
        query: {
          name: product.productName,
          unit_price: (product.unitPrice),
          carton_price: product.cartonPrice,
          half_carton_price: product.halfCartonPrice
        }
      })
    },
    updateCart(addedItems) {
      this.currentCart = addedItems;
      // console.log(this.currentCart)
    },
    removeCartItem(id) {
      let itemToRemove = this.currentCart.find((element) => element.id == id);
      let indexToRemove = this.currentCart.indexOf(itemToRemove);
      this.currentCart.splice(indexToRemove, 1);
    },
    clearCart() {
      this.currentCart = [];
    },
    increment(id) {
      let itemToIncrement = this.currentCart.find(
        (element) => element.id == id
      );
      itemToIncrement.qty++;
    },
    decrement(id) {
      let itemToDecrement = this.currentCart.find(
        (element) => element.id == id
      );
      if (itemToDecrement.qty == 1) {
        this.removeCartItem(id);
      }
      itemToDecrement.qty--;
    },
    loadSpinner() {
      this.isLoading = true
    },
    removeSpinner() {
      this.isLoading = false
    }
  },
  computed: {
    cartCount() {
      return this.currentCart.length;
    },
  },
  watch: {
    $route() {
      this.currentLocation = this.$router.currentRoute._rawValue.path;
    },
  },
};
</script>
