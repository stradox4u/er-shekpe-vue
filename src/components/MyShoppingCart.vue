<template>
    <div class="container pb-5">
        <h2 class="pl-3 font-bold font-sans text-xl">Shopping Cart</h2>
        <ul>
            <my-cart-item v-for="cartContent in cartContents" :key="cartContent.id" :itemImage="cartContent.prodImg" :itemName="cartContent.prodName" :itemUnit="cartContent.unit" :itemQty="cartContent.qty" :itemProdPrice="cartContent.prodPrice" :itemId="cartContent.id" @removeItem="removeItem(cartContent.id)" @decrease="reduce(cartContent.id)" @increase="add(cartContent.id)" class="mx-3 mt-3 rounded shadow"></my-cart-item>
        </ul>
        <div class="">
            <h3 class="font-serif font-bold text-lg text-right pr-3">Total:</h3>
            <p class="font-sans text-xl text-right pr-3"> {{ currencyFormat(parseFloat(totalPrice)) }}</p>
        </div>
        <p v-if="cartContents.length === 0" class="text-center font-sans text-xl">Please add items to your cart to populate this page!</p>
        <my-base-button v-else @click="storePurchase" class="mt-3 mx-auto container shadow mb-5 block">Purchase Now</my-base-button>
    </div>
</template>

<script>
import MyCartItem from './UI/MyCartItem.vue'
import axios from 'axios'

export default {
    name: 'MyShoppingCart',
    components: {
        MyCartItem
    },
    props: ['cartContents'],
    computed: {
        totalPrice() {
            let total = 0
            this.cartContents.forEach((element) => {
                total += (element.prodPrice * element.qty)
                return total
            })
            return total
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('removeItem', id)
        },
        storePurchase() {
            const credentials = process.env.VUE_APP_CREDENTIALS
            const purchase = {
                id: new Date().getTime(),
                purchased_items: this.cartContents,
                totalPurchasePrice: this.totalPrice
            }
            this.$emit('apiCallMade')
            const purchasesURL = process.env.VUE_APP_PURCHASES_URL
            axios.post(purchasesURL + '?auth=' + credentials, purchase)
            .then((response) => {
                console.log(response)
                this.$emit('apiCallCompleted')
                this.$router.push('/')
            })
            .catch((error) => {
                console.log(error.message)
                this.$router.push('/')
            })
        },
        currencyFormat(value) {
            return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, currencyDisplay: 'code' }).format(value)
        },
        reduce(id) {
            this.$emit('reduceItem', id)
        },
        add(id) {
            this.$emit('addItem', id)
        },
    },
    emits: ['removeItem', 'reduceItem', 'addItem', 'apiCallMade', 'apiCallCompleted']
}
</script>