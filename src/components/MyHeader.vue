<template>
    <div class="container bg-yellow-500 flex flex-row justify-between space-x-5 p-3">
        <router-link to="/"><h1 class="font-sans text-xl font-bold text-left pl-2">ER SHEKPE</h1> </router-link> 
        <my-search-bar class=""></my-search-bar>
        <my-cart-button :cartCount="cartCount" @cartClicked="goToCart"></my-cart-button>
    </div>
</template>

<script>
import MySearchBar from './UI/MySearchBar.vue'
import MyCartButton from './UI/MyCartButton.vue'

export default {
    name: 'MyHeader',
    components: {
        MySearchBar,
        MyCartButton,
    },
    props: ['cartCount'],
    methods: {
        goToCart() {
            this.$router.push('/cart')
        }
    }
}
</script>