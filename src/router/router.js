
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {   
        name: 'Home',
        path: '/', 
        component: () => import( /* webpackChunkName: "HomePage" */ '@/pages/HomePage') 
    },
    {   
        name: 'Destination',
        path: '/destination', 
        component: () => import( /* webpackChunkName: "DestinationPage" */ '@/pages/DestinationPage') 
    },
    { 
        name: 'Crew',
        path: '/crew', 
        component: () => import( /* webpackChunkName: "CrewPage" */ '@/pages/CrewPage') 
    },
    { 
        name: 'Technology',
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