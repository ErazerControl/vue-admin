import Login from "../views/login.vue"
import VueRouter from "vue-router"
const routes = [
    { path: '/login', component: Login }

]
const router = new VueRouter({routes})
export default router