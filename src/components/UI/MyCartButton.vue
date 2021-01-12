<template>
    <a href="#" @click="cartClicked">
        <div class="inline-flex pb-1 space-x-1">
            <i class="fas fa-shopping-cart my-auto"></i>
            <span class="bg-gray-100 p-1 rounded text-xs shadow"> {{ cartCount }} </span>
        </div>
        <p class="text-sm font-serif">Cart</p>
    </a>
</template>

<script>
export default {
    name: 'MyCartButton',
    methods: {
        cartClicked() {
            this.$emit('cartClicked')
        }
    },
    props: {
        cartCount: {
            type: Number,
            required: true
        }
    }
}
</script>