<template>
    <nav class="bg-green-900 text-white text-left pl-5 mb-5 flex justify-between">
        <h3> {{ currentLocation }} </h3>
        <router-link to="/create" class="mr-3 focus:ring">Create New Product</router-link>    
    </nav>
</template>

<script>
export default {
    name: 'MyNavBar',
    computed: {
        currentLocation: () => {
            if(window.location.href.includes("create")){
                return 'Create'
            } else if(window.location.href.includes("edit")) {
                return 'Edit'
            } else if(window.location.href.includes("cart")) {
                return 'Cart'
            } else {
                return 'Shop'
            }
        }
    }
}
</script>