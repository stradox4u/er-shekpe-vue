<template>
    <div class="bg-yellow-500 flex flex-row items-center justify-between space-x-5 p-3">
        <router-link to="/"><h1 class="font-sans text-base font-bold text-left pl-2">ER SHEKPE</h1> </router-link> 
        <my-search-bar class="lg:w-full"></my-search-bar>
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