// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sala from '../views/Sala.vue'; 
import Login from '../views/Login.vue'; 
import Inscricoes from '../views/Inscricoes.vue'; 
import Inscrever from '../views/Inscrever.vue'; 

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
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/inscricoes',
        name: 'Inscricoes',
        component: Inscricoes,
    },
    {
        path: '/inscrever',
        name: 'Inscrever',
        component: Inscrever,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
