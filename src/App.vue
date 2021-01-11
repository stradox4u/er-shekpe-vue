<template>
  <div class="bg-yellow-100">
    <my-header :cartCount="cartCount"></my-header>
    <my-nav-bar :location="currentLocation"></my-nav-bar>
    <router-view :cartContents="currentCart" @updateCart="updateCart" @removeItem="removeCartItem" @clearCartContents="clearCart"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentCart: []
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
    }
  },
  computed: {
    cartCount() {
      return this.currentCart.length
    },
    currentLocation() {
      return this.$router.currentRoute._rawValue.path
    }
  }
}
</script>