import Login from "../views/login.vue"
import Index from "../views/index.vue"
import VueRouter from "vue-router"
import { getToken } from "../utils/auth"
const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Index ,meta: {'title':"主页"}},
    {
        path: '/menu',
        component: Index,
        meta: { 'title': '菜单' },
        children: [
            {
                path: 'menu1',
                component: Index,
                meta: { 'title': '菜单1' },
                children: [{
                    path: 'menu1-1',
                    component: Index,
                    meta: { 'title': '菜单1-1' },
                },
                {
                    path: 'menu1-2',
                    component: Index,
                    meta: { 'title': '菜单1-2' },
                }]
            }

        ]
    }

]
const router = new VueRouter({ routes })
var whiteList = ['/login']
router.beforeEach((to, from, next) => {
    //获取跳转页面的meta信息
    console.log(to);
    const hasToken = getToken();
    if (whiteList.indexOf(to.path) !== -1) {
        next();
    }
    window.console.log(to.path);
    if (hasToken) {
        next()
    }
    else {
        next('/login')
    }
})
export default router