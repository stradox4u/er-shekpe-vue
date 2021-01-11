<template>
    <div class="bg-gray-100 p-1 flex flex-row justify-between space-x-2">
        <img :src="itemImage" alt="item picture" class="shadow h-8 rounded">
        <div>
            <h3 class="font-sans font-bold text-sm">{{ itemName }}</h3>
            <p class="italic font-sans text-xs">In Stock</p>
            <p class="italic font-sans text-xs text-pink-800">Out of Stock</p>
            <a @click="remove" href="#" class="pt-3 text-xs">Remove <i class="far fa-trash-alt"></i></a>
        </div>
        <div>
            <p class="font-sans text-sm font-bold">Unit: {{ unitName }}</p>
            <span class="space-x-0 inline-flex pt-3">
                <p class="my-auto text-xs">Qty:</p>
                <a @click="minus1(itemId)" href="#" class="my-auto focus:ring focus:border-gray-500 text-xs"><span class="bg-gray-100 p-2 rounded-l">-</span></a>
                <span class="bg-gray-100 p-2 my-auto text-xs"> {{ itemQty }} </span>
                <a @click="plus1(itemId)" href="#" class="my-auto focus:shadow text-xs"><span class="bg-gray-100 p-2 rounded-r">+</span></a>
            </span>
        </div>
        <div>
            <p class="font-sans text-sm">Unit Price:</p>
            <p class="font-sans text-base font-bold"> {{ currencyFormat((itemProdPrice)) }}</p>
            <p class="font-sans text-sm italic">x {{ itemQty }} pcs</p>
            <p class="font-sans text-base italic">Subtotal:  {{ currencyFormat(subTotal) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyCartItem',
    props: {
        itemImage: {
            type: String,
            required: true
        },
        itemName: {
            type: String,
            required: true
        },
        itemUnit: {
            type: String,
            required: true
        },
        itemQty: {
            type: Number,
            required: true
        },
        itemProdPrice: {
            type: Number,
            required: true
        },
        itemId: {
            type: String,
            required: true
        }
    },
    computed: {
        subTotal() {
            return this.itemQty * this.itemProdPrice
        },
        unitName() {
            return this.itemUnit.charAt(0).toUpperCase() + this.itemUnit.slice(1)
        },
    },
    methods: {
        remove() {
            this.$emit('removeItem', this.itemId)
        },
        currencyFormat(value) {
            return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, currencyDisplay: 'code' }).format(value)
        },
        minus1(id) {
            this.$emit('decrease', id)
        },
        plus1(id) {
            this.$emit('increase', id)
        }
    },
    emits: ['decrease', 'increase']
}
</script>