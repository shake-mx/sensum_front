import Vue from 'vue'
import VueRouter from "vue-router"

import Home from "../src/components/home/Home";
import Catalogo from "../src/components/catalogo/Catalogo";





Vue.use(VueRouter);


const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/catalogo",
        name:"Catalogo",
        component: Catalogo
    }
];

const router = new VueRouter({
    mode:'history',
    base: __dirname,
    routes
})




export default router;

