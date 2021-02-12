<template>
    <div class="container px-5 pb-5">
        <h2 class="font-sans font-bold text-xl pb-3">Edit {{ name }}</h2>
        <form @submit.prevent="submitEditedProduct" action="#">
            <my-base-input v-model="inputUnitPrice" label="unit-price" labelString="Unit Price: " inputType="number" :placeholderString="currencyFormat(unit_price)" :stepValue="0.01"></my-base-input>
            <my-base-input v-model="inputCartonPrice" label="carton-price" labelString="Carton Price: " inputType="number" :placeholderString="currencyFormat(carton_price)" :stepValue="0.01"></my-base-input>
            <my-base-input v-model="inputHalfCartonPrice" label="half-carton-price" labelString="Half Carton Price: " inputType="number" :placeholderString="currencyFormat(half_carton_price)" :stepValue="0.01"></my-base-input>

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
            error: '',
            inputUnitPrice: 0,
            inputCartonPrice: 0,
            inputHalfCartonPrice: 0
        }
    },
    props: ['name', 'unit_price', 'carton_price', 'half_carton_price'],
    methods: {
        submitEditedProduct() {
            // Make api call to update product in firebase realtime database
            if(this.inputUnitPrice === 0 || this.inputCartonPrice === 0 || this.inputHalfCartonPrice === 0) {
                this.error = 'Sorry, you have one or more invalid fields. Please check again before submitting.'
                return
                
            } else {
                this.$emit('apiCallMade')
                const cors = 'https://cors-anywhere.herokuapp.com/'
                const credentials = process.env.VUE_APP_CREDENTIALS
                axios.patch(cors + process.env.VUE_APP_SHORT_PRODUCTS_URL + '/' + this.id + '.json?auth=' + credentials, {
                    unit_price: this.inputUnitPrice,
                    carton_price: this.inputCartonPrice,
                    half_carton_price: this.inputHalfCartonPrice
                })
                .then((response) => {
                    console.log(response)
                    this.$emit('apiCallCompleted')
                    this.$router.push('/')
                })
                .catch((error) => {
                    this.error = error
                    console.log(error)
                    this.$router.push('/')
                })
            }
            
        },
        currencyFormat(value) {
            return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, currencyDisplay: 'code' }).format(value)
        },
    },
    beforeMount() {
        this.id = this.$route.params.id
        // console.log(this.id)
    },
    emits: ['apiCallMade', 'apiCallCompleted'],
}
</script>