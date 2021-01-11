<template>
  <div class="bg-yellow-100">
    <my-header :cartCount="cartCount"></my-header>
    <my-nav-bar :location="currentLocation"></my-nav-bar>
    <router-view :cartContents="currentCart" @updateCart="updateCart" @removeItem="removeCartItem" @clearCartContents="clearCart" @reduceItem="decrement" @addItem="increment"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentCart: [],
      currentLocation: ''
    }
  },
  components: {

  },
  methods: {
    updateCart(addedItems) {
      this.currentCart = addedItems
      // console.log(this.currentCart)
    },
    removeCartItem(id) {
      let itemToRemove = this.currentCart.find(element => element.id == id)
      let indexToRemove = this.currentCart.indexOf(itemToRemove)
      this.currentCart.splice(indexToRemove, 1)
    },
    clearCart() {
      this.currentCart = []
    },
    increment(id) {
      let itemToIncrement = this.currentCart.find(element => element.id == id)
      itemToIncrement.qty++
    },
    decrement(id) {
      let itemToDecrement = this.currentCart.find(element => element.id == id)
      if(itemToDecrement.qty == 1) {
        this.removeCartItem(id)
      }
      itemToDecrement.qty--
    }
  },
  computed: {
    cartCount() {
      return this.currentCart.length
    },
  },
  watch: {
    $route () {
      this.currentLocation = this.$router.currentRoute._rawValue.path
    }
  }
}
</script>