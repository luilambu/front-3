import vueRouter from 'vue-router'
import Clientes from './components/clientes'
import UserBalance from './components/UserBalance'
import App from './App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
