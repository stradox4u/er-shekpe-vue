<template>
  <div class="bg-yellow-100">
    <my-header></my-header>
    <my-nav-bar></my-nav-bar>
    <div class="grid grid-cols-2">
      <my-item-card></my-item-card>
      <my-item-card></my-item-card>
      <my-item-card></my-item-card>
      <my-item-card></my-item-card>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyItemCard from './components/MyItemCard.vue'
import MyNavBar from './components/MyNavBar.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyNavBar,
    MyItemCard
  }
}
</script>
