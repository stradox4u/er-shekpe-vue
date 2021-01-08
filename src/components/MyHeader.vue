<template>
    <div class="container bg-yellow-500 flex flex-row justify-between space-x-5 p-3">
        <h1 class="font-sans text-3xl font-extrabold text-left pl-3">ER SHEKPE</h1>  
        <my-search-bar class=""></my-search-bar>
        <my-cart-button></my-cart-button>
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
    }
}
</script>