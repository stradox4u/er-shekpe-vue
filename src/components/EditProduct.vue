<template>
    <div class="container">
        <h2 class="font-sans font-bold text-xl pb-3">Edit {{ product.product_name }}</h2>
        <form @submit.prevent="submitEditedProduct" action="#">
            <my-base-input v-model="inputUnitPrice" label="unit-price" labelString="Unit Price: " inputType="number" :placeholderString="'&#8358;' + product.unit_price" stepValue="0.01"></my-base-input>
            <my-base-input v-model="inputCartonPrice" label="carton-price" labelString="Carton Price: " inputType="number" :placeholderString="'&#8358;' + product.carton_price" stepValue="0.01"></my-base-input>
            <my-base-input v-model="inputHalfCartonPrice" label="half-carton-price" labelString="Half Carton Price: " inputType="number" :placeholderString="'&#8358;' + product.half_carton_price" stepValue="0.01"></my-base-input>

            <p v-if="error != ''"> {{ error }} </p>
            <my-base-button class="block shadow mx-auto mb-3 w-full">Submit</my-base-button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditProduct',
    data() {
        return {
            id: '',
            product: {},
            error: '',
            inputUnitPrice: 0,
            inputCartonPrice: 0,
            inputHalfCartonPrice: 0
        }
    },
    methods: {
        getProductDetails(query) {
            const cors = 'https://cors-anywhere.herokuapp.com/'
            axios.get(cors + process.env.VUE_APP_SHORT_PRODUCTS_URL + '/' + query + '.json')
            .then((response) => {
                this.product = response.data
                console.log(this.product)
            })
            .catch((error) => {
                this.error = 'Sorry, we could not contact the server. Please try again.'
                console.log(error)
            })
        },

        submitEditedProduct() {
            if(this.inputUnitPrice === 0 || this.inputCartonPrice === 0 || this.inputHalfCartonPrice === 0) {
                this.error = 'Sorry, you have one or more invalid fields. Please check again before submitting.'
                
            } else {
                const cors = 'https://cors-anywhere.herokuapp.com/'
                axios.patch(cors + process.env.VUE_APP_SHORT_PRODUCTS_URL + '/' + this.id + '.json', {
                    unit_price: this.inputUnitPrice,
                    carton_price: this.inputCartonPrice,
                    half_carton_price: this.inputHalfCartonPrice
                })
                .then((response) => {
                    console.log(response)
                    this.$router.push('/')
                })
                .catch((error) => {
                    this.error = error
                    console.log(error)
                })
            }
            
        }
    },
    mounted() {
        const urlArray = window.location.href.split('-')
        const idArray = urlArray.slice(1)
        if(idArray.length > 1) {
            this.id = '-' + idArray.join('-')
        } else {
            this.id = '-' + idArray[0]
        }
        this.getProductDetails(this.id)
    }

}
</script>