import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue"

import '@noction/vue-bezier/dist/style.css'
import Transitions from '@noction/vue-bezier'
import ObjectView from "@/pages/ObjectView.vue";


const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
        children:
            [
                {
                    path: '/',
                    name: 'home',
                    component: HomePage}
                , {
            path: 'shop',
                name: 'shop',
                component: ShopPage,
                children:
                [
                    {
                        path: '/:id',
                        name: 'objectView',
                        component: ObjectView,
                        props: true,
                    },
                ]
            },
            ],
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
const app = createApp(App)
app.use(router)
app.use(Transitions)


app.mount('#app')