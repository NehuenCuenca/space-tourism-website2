
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { 
        path: '/', 
        component: () => import( /* webpackChunkName: "HomePage" */ '@/pages/HomePage') 
    },
    { 
        path: '/crew', 
        component: () => import( /* webpackChunkName: "CrewPage" */ '@/pages/CrewPage') 
    },
    { 
        path: '/destination', 
        component: () => import( /* webpackChunkName: "DestinationPage" */ '@/pages/DestinationPage') 
    },
    { 
        path: '/technology', 
        component: () => import( /* webpackChunkName: "TechnologyPage" */ '@/pages/TechnologyPage')
    },
    { 
        //COMODIN PARA REDIRECCIONAR CUANDO LA URL INGRESADA NO ES NINGUNA DE LAS ANTERIORES
        path: '/:pathMatch(.*)*', 
        component: () => import( /* webpackChunkName: "NoPageFound" */ '@/pages/NoPageFound')
    }, 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;