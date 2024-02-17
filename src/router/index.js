import {createRouter , createWebHistory} from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import MealByName from '../views/MealByName.vue';
import MealByLetter from '../views/MealByLetter.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/by-name/:name?",
                name: "byname",
                component: MealByName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealByLetter,
            },
        ],
    },
    {
        path: "/guest",
        component: GuestLayout,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;