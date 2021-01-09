<template>
    <h2>Shopping Cart</h2>
    <ul>
        <my-cart-item></my-cart-item>
    </ul>
</template>

<script>
import MyCartItem from './UI/MyCartItem.vue'
export default {
    name: 'MyShoppingCart',
    components: {
        MyCartItem
    }
}
</script>