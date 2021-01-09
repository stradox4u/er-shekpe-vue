<template>
    <div class="container">
        <h2 class="font-sans font-bold text-xl">Create New Product</h2>
        <upload-image></upload-image>
        <hr class="pb-5">
        <form @submit.prevent="storeInfo">
            <my-base-input v-model="productName" label="product-name" labelString="Product Name: " inputType="text" placeholderString="Enter Product Name Here"></my-base-input>
            <my-base-input v-model="unitPrice" label="unit-price" labelString="Unit Price: " inputType="number" placeholderString="&#8358; 0.00" :stepValue="0.01"></my-base-input>
            <my-base-input v-model="cartonPrice" label="carton-price" labelString="Carton Price: " inputType="number" placeholderString="&#8358; 0.00" :stepValue="0.01"></my-base-input>
            <my-base-input v-model="halfCartonPrice" label="half-carton-price" labelString="Half Carton Price: " inputType="number" placeholderString="&#8358; 0.00" :stepValue="0.01"></my-base-input>
            <my-base-button class="block my-3 container shadow">Submit</my-base-button>
        </form>
    </div>
</template>

<script>
import UploadImage from './UploadImage.vue'
import axios from 'axios'

export default {
    name: 'CreateNewProduct',
    components: {
        UploadImage,
    },
    data() {
        return {
            productName: '',
            unitPrice: 0,
            cartonPrice: 0,
            halfCartonPrice: 0,
            invalidInput: false,
        }
    },
    methods: {
        storeInfo() {
            if(this.productName === '' || this.unitPrice === 0 || this.cartonPrice === 0 || this.halfCartonPrice === 0) {
                this.invalidInput = true
                return
            } else {
                this.invalidInput = false
            }

            axios.post('https://teak-blueprint-277401-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
                product_name: this.productName,
                unit_price: this.unitPrice,
                carton_price: this.cartonPrice,
                half_carton_price: this.halfCartonPrice,
            })
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error.message)
            })
            this.$router.push('/')
        }
    }
}
</script>