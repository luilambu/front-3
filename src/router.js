import vueRouter from 'vue-router'


import CrearCliente from './components/clienteComponent'
import Portada from './components/Portada'
import CrearCompranpm from './components/comprasComponent'
import ClienteAuth from './components/auth_cliente'
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
                 path: '/clientes/registro_cliente/',
                name: "crear_cliente",
                component: CrearCliente
                
            },
            {
                path: '/clientes/compras/',
                name: "CrearCompra",
                component: CrearCompranpm
            },
            {
                path: '/clientes/auth/:Cedula',
                name: "auth_cliente",
                component: ClienteAuth
            }, 
        ]
    })



export default router