import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/css/index.css'

import MyBaseButton from './components/UI/MyBaseButton.vue'
import MyHeader from './components/MyHeader.vue'
import MyItemCard from './components/MyItemCard.vue'
import MyNavBar from './components/MyNavBar.vue'
import ProductsPage from './components/ProductsPage.vue'
import MyShoppingCart from './components/MyShoppingCart.vue'
import MyBaseInput from './components/UI/MyBaseInput.vue'
import CreateNewProduct from './components/CreateNewProduct.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: ProductsPage},
        {path: '/cart', component: MyShoppingCart},
        {path: '/create', component: CreateNewProduct},
    ]
})

const app = createApp(App)

app.use(router)

app.component('my-base-button', MyBaseButton)
app.component('my-header', MyHeader)
app.component('my-item-card', MyItemCard)
app.component('my-nav-bar', MyNavBar)
app.component('my-base-input', MyBaseInput)
app.component('create-new-product', CreateNewProduct)

app.mount('#app')
