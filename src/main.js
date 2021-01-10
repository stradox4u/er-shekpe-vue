import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import firebase from 'firebase'
import './styles/css/index.css'

import MyBaseButton from './components/UI/MyBaseButton.vue'
import MyHeader from './components/MyHeader.vue'
import MyItemCard from './components/MyItemCard.vue'
import MyNavBar from './components/MyNavBar.vue'
import ProductsPage from './components/ProductsPage.vue'
import MyShoppingCart from './components/MyShoppingCart.vue'
import MyBaseInput from './components/UI/MyBaseInput.vue'
import CreateNewProduct from './components/CreateNewProduct.vue'
import EditProduct from './components/EditProduct.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: ProductsPage},
        {path: '/cart', component: MyShoppingCart},
        {path: '/create', component: CreateNewProduct},
        {path: '/edit/:id', component: EditProduct},
    ]
})

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
}

firebase.initializeApp({firebaseConfig})
const app = createApp(App)

app.use(router)

app.component('my-base-button', MyBaseButton)
app.component('my-header', MyHeader)
app.component('my-item-card', MyItemCard)
app.component('my-nav-bar', MyNavBar)
app.component('my-base-input', MyBaseInput)
app.component('create-new-product', CreateNewProduct)
app.component('edit-product', EditProduct)


app.mount('#app')
