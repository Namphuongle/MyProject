import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import Regester from "@/views/regester.vue";
import ErrorPage from "@/views/errorPage.vue";
import Internet from "@/views/internet.vue";
import OpticalFiber from "@/views/opticalFiber.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    
    {
        path: "/admin",
        name: "adminHome",
        component: Home,
    },

    {
        path: "/regester",
        name: "regester",
        component: Regester,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "errorPage",
        component: ErrorPage,
    },

    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/internet",
        name: "internet",
        component: Internet,
    },
    {
        path: "/capquang",
        name: "capquang",
        component: OpticalFiber,
    },
   

   
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;