<template>
    <div class="container">
        <h2 class="pl-3 font-bold font-sans text-xl">Shopping Cart</h2>
        <ul>
            <my-cart-item class="mx-3 mt-3 rounded shadow"></my-cart-item>
            <my-cart-item class="mx-3 mt-3 rounded shadow"></my-cart-item>
            <my-cart-item class="mx-3 mt-3 rounded shadow"></my-cart-item>
            <my-cart-item class="mx-3 mt-3 rounded shadow"></my-cart-item>
            <my-cart-item class="mx-3 mt-3 rounded shadow"></my-cart-item>
        </ul>
        <div class="">
            <h3 class="font-serif font-bold text-lg text-right pr-3">Total:</h3>
            <p class="font-sans text-xl text-right pr-3">&#8358; 1800.00</p>
        </div>
        <my-base-button class="mt-3 mx-auto container shadow mb-5 block">Purchase Now</my-base-button>
    </div>
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