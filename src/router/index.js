// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sala from '../views/Sala.vue'; 

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sala/:id',
        name: 'Sala',
        component: Sala,
        props: true
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
