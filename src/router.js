import Vue from 'vue'
import VueRouter from "vue-router"

import Home from "../src/components/home/Home";
import Catalogo from "../src/components/catalogo/Catalogo";
import ModalPropiedades from "../src/components/catalogo/modalPropiedades";





Vue.use(VueRouter);


const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/propiedades",
        name:"Propiedades",
        component: Catalogo,
        meta: { scrollToTop: true },
    },
    {
        path:"/catalogo",
        name:"Catalogo",
        component: Catalogo,
        meta: { scrollToTop: true },
        children: [
            {
                path: ":folio",
                component: ModalPropiedades,
                props: true,
                meta:{
                    mostrarModal: true
                }
            },

        ]
    }
];

const router = new VueRouter({
    mode:'history',
    base: __dirname,
    routes
})




export default router;

