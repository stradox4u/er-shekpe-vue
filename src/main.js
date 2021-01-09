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

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: ProductsPage},
        {path: '/cart', component: MyShoppingCart}
    ]
})

const app = createApp(App)

app.use(router)

app.component('my-base-button', MyBaseButton)
app.component('my-header', MyHeader)
app.component('my-item-card', MyItemCard)
app.component('my-nav-bar', MyNavBar)

app.mount('#app')
