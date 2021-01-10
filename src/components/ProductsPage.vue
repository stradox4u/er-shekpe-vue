<template>
    <div class="appearance-none">
        <p v-if="isLoading === false && errorMessage !== ''">{{ errorMessage }}</p>
        <p v-else-if="isLoading" class="font-serif text-3xl">Loading...</p>
        <ul v-else class="grid grid-cols-2">
            <my-item-card @itemToEdit="editProduct(result.id)" v-for="result in results" :key="result.id" :id="result.id" :productImage="result.productImage" :productName="result.productName" :unitPrice="result.unitPrice" :cartonPrice="result.cartonPrice" :halfCartonPrice="result.halfCartonPrice"></my-item-card>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProductsPage',
    data() {
        return {
            results: [],
            errorMessage: '',
            isLoading: true,
            productToEdit: '',
        }
    },
    methods: {
        loadProducts() {
            const productsURL = process.env.VUE_APP_PRODUCTS_URL
            axios.get(productsURL)
            .then( (response) => {
                // Handle Success
                const results = []
                for (const id in response.data) {
                    // console.log(id, response.data[id].product_name)
                    results.push({
                        id: id,
                        productImage: response.data[id].product_image,
                        productName: response.data[id].product_name,
                        unitPrice: response.data[id].unit_price,
                        cartonPrice: response.data[id].carton_price,
                        halfCartonPrice: response.data[id].half_carton_price
                    })
                }
                this.results = results
                this.isLoading = false
                // console.log(results)
            })
            .catch(function (error) {
                // Handle Error
                this.errorMessage = 'Server request failed. Please Refresh Page!'
                console.log(error)
            })
        },
        editProduct(object) {
            this.productToEdit = object
            // console.log(object)
            // console.log(this.results.find((element) => element.id == object))
            this.$router.push('/edit/product/' + object)
        }
    },
    mounted() {
        this.loadProducts()
    },
    provide() {
        return {
            idOfProductToEdit: this.productToEdit,
            productObject: this.results.find((element) => element.id == this.productToEdit)
        }
    }
    
}
</script>