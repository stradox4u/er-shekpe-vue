<template>
    <div class="p-3 mx-1 mb-2 bg-gray-100">
        <!-- Product Edit Button -->
        <my-base-button @click="editItem(id)" class="mb-2 shadow text-xs font-sans">Edit Product</my-base-button>
        <!-- Product Image -->
        <div class="rounded-full">
            <img :src="productImage" alt="Some image" class="shadow w-60 mx-auto rounded-xl mb-6">
        </div>
        <!-- Product Name -->
        <h3 class="font-sans text-sm font-bold text-center">{{ productName }}</h3>
        <hr class="mb-3">
        <!-- Product Details -->
        <div class="flex flex-col">
            <div class="inline-flex space-x-1 float-left pb-2">
                <h4 class="font-sans font-bold text-xs text-left pl-1">Unit Price: </h4><p class="font-sans text-xs my-auto">{{ currencyFormat(unitPrice) }}</p>
            </div>

            <div class="inline-flex space-x-1 float-left pb-2">
                <h4 class="font-sans font-bold text-xs text-left pl-1">Carton Price: </h4><p class="font-sans text-xs my-auto">{{ currencyFormat(cartonPrice) }}</p>
            </div>

            <div class="inline-flex space-x-1 float-left pb-2">
                <h4 class="font-sans font-bold text-xs text-left pl-1">Half Carton Price: </h4><p class="font-sans text-xs my-auto">{{ currencyFormat(halfCartonPrice) }}</p>
            </div>
        </div>
        <p class="font-sans italic clear-both text-center text-xs">In Stock</p>
        <p class="font-sans text-pink-600 italic text-center text-xs">Out of Stock</p>
        <!-- Add to Cart -->
        <div class="mt-3">
            <form @submit.prevent="submitQty(id)" action="#">
                <div class="flex space-x-1 mb-3">
                    <p class="my-auto text-sm font-sans">Qty:</p>
                    <input v-model="inputQty" type="number" name="quantity" class="pl-3 focus:outline-none w-8 text-xs font-sans">
                    <select v-model="inputUnit" :name="productName + '-unit'" class="bg-gray-100 p-1 rounded focus:outline-none w-20 text-xs font-sans">
                        <option value="units">Units</option>
                        <option value="cartons">Cartons</option>
                        <option value="half-carton">Half Carton</option>
                    </select>
                </div>
                <my-base-button class="text-xs p-1 shadow w-full">Add To Cart</my-base-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyItemCard",
    data() {
        return {
            inputQty: 1,
            inputUnit: 'units',
            chosenUnitPrice: this.unitPrice,
        }
    },
    props: {
        productImage: {
            type: String,
            required: true,
        },
        productName: {
            type: String,
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        cartonPrice: {
            type: Number,
            required: true
        },
        halfCartonPrice: {
            type: Number,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        editItem(id) {
            this.$emit('itemToEdit', id)
        },
        submitQty(id) {
            const toAdd = {id: id, qty: this.inputQty, unit: this.inputUnit, prodName: this.productName, prodImg: this.productImage, prodPrice: this.chosenUnitPrice}
            this.$emit('productQty', toAdd)
        },
        currencyFormat(value) {
            return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, currencyDisplay: 'code' }).format(value)
        },
    },
    emits: ['itemToEdit', 'productQty'],
    watch: {
        inputUnit(value) {
            if(value === 'units') {
                this.chosenUnitPrice = this.unitPrice
            } else if(value === 'cartons') {
                this.chosenUnitPrice = this.cartonPrice
            } else if(value === 'half-carton') {
                this.chosenUnitPrice = this.halfCartonPrice
            }
        }
    }
};
</script>