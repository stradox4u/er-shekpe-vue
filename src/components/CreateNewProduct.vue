<template>
    <div class="container px-5 pb-5">
        <h2 class="font-sans font-bold text-xl">Create New Product</h2>
        <upload-image @imageDecoded="setImage" :progressPercent="progress"></upload-image>
        <hr class="pb-5">
        <form @submit.prevent="storeInfo">
            <my-base-input v-model="productName" label="product-name" labelString="Product Name: " inputType="text" placeholderString="Enter Product Name Here"></my-base-input>
            <my-base-input v-model="unitPrice" label="unit-price" labelString="Unit Price: " inputType="number" placeholderString="&#8358; 0.00" :stepValue="0.01"></my-base-input>
            <my-base-input v-model="cartonPrice" label="carton-price" labelString="Carton Price: " inputType="number" placeholderString="&#8358; 0.00" :stepValue="0.01"></my-base-input>
            <my-base-input v-model="halfCartonPrice" label="half-carton-price" labelString="Half Carton Price: " inputType="number" placeholderString="&#8358; 0.00" :stepValue="0.01"></my-base-input>
            <my-base-button class="block my-3 container shadow">Submit</my-base-button>
        </form>
        <!-- Error to show if there is an invalid input -->
        <p v-if="invalidInput" class="block mx-auto font-sans text-sm">One or more of your inputs is invalid. Please check again before submitting.</p>
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
            image: '',
        }
    },
    methods: {
        setImage(rawImg) {
            this.image = rawImg
        },
        storeInfo() {
            this.$emit('apiCallMade')
            // Check if any of the inputs is empty
            if(this.productName === '' || this.unitPrice === 0 || this.cartonPrice === 0 || this.halfCartonPrice === 0) {
                this.invalidInput = true
                return
            } else {
                this.invalidInput = false
            }

            // Put product to firebase realtime database
            const productsURL = process.env.VUE_APP_PRODUCTS_URL
            axios.post(productsURL, {
                product_name: this.productName,
                unit_price: this.unitPrice,
                carton_price: this.cartonPrice,
                half_carton_price: this.halfCartonPrice,
                product_image: this.image
            })
            .then((response) => {
                this.$emit('apiCallCompleted')
                console.log(response)
                this.$router.push('/')
            })
            .catch((error) => {
                console.log(error.message)
                this.$router.push('/')
            })
        }
    },
    computed: {
        progress() {
            if(this.image === '') {
                return 0
            } else {
                return 100
            }
        }
    },
    emits: ['apiCallMade', 'apiCallCompleted'],
}
</script>