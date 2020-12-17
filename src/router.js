import vueRouter from 'vue-router'


import CrearCliente from './components/clienteComponent'
import Portada from './components/Portada'
//import UserAuth from './components/UserAuth'
//import UserBalance from './components/UserBalance'
//import UserTransaction from './components/UserTransaction'
import App from './App'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/clientes/',
                name: "portada",
                component: Portada
            },
            {
                path: '/clientes/registro_cliente/:cc',
                name: "crear_cliente",
                component: CrearCliente
            },
        ]
    })



export default router