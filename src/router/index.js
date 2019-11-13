import Login from "../views/login.vue"
import VueRouter from "vue-router"
const routes = [
    { path: '/login', component: { template: '<div>foo</div>' } },
    { path: '/', component: Login },
    {
        path: '*',
        component: Error
    }

]
const router = new VueRouter(routes)
export default router