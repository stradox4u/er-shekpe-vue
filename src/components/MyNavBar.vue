<template>
    <nav class="bg-green-900 text-white text-left pl-5 mb-5 flex justify-between">
        <h3> {{ locationString }} </h3>
        <router-link to="/create" class="mr-3 focus:ring">Create New Product</router-link>    
    </nav>
</template>

<script>
export default {
    name: 'MyNavBar',
    data() {
        return {
            locationString: ''
        }
    },
    props: {
        location: {
            type: String,
            required: true
        }
    },
    watch: {
        location() {
            switch(this.location) {
                case '/':
                    this.locationString = 'Shop'
                    break
                case '/create':
                    this.locationString = 'Create'
                    break
                case '/cart':
                    this.locationString = 'Cart'
                    break
                default:
                    this.locationString = 'Edit'
                    break
            }
        }
    }
}
</script>