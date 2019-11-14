import Login from "../views/login.vue"
import VueRouter from "vue-router"
import {getToken} from "../utils/auth"
const routes = [
    { path: '/login', component: Login }

]
const router = new VueRouter({routes})
var whiteList = ['/login']
router.beforeEach((to,from,next) => {
    const hasToken = getToken();
    if(whiteList.indexOf(to.path) !== -1) {
        next();
    }
    window.console.log(to.path);
    if(hasToken) {
        next()
    }
    else {
        next('/login')
    }
})
export default router