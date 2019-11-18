import Login from "../views/login.vue"
import Layout from "@/views/index.vue"
import Table from "../views/example/Table"
import Tree from "../views/example/Tree"
import Menu2 from "@/views/menu/menu2/index"
import VueRouter from "vue-router"
import { getToken } from "../utils/auth"
const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Layout ,meta: {'title':"主页"}},
    {
        path: '/example',
        component: Layout,
        meta: { 'title': '示例' },
        children: [
            {
                path: 'table',
                component: Table,
                meta: { 'title': '表格' }
            },
            {
                path: 'tree',
                component: Tree,
                meta: { 'title': '树图' }
            }

        ]
    },
    {
        path: '/menu',
        component: Layout,
        redirect: '/menu/menu1',
        meta: { 'title': '菜单' },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/menu/menu1/index.vue'),
                meta: { 'title': '菜单1' },
                children: [{
                    path: 'menu1-1',
                    component: () => import('@/views/menu/menu1/menu1-1'),
                    meta: { 'title': '菜单1-1' },
                },
                {
                    path: 'menu1-2',
                    component:  () => import('@/views/menu/menu1/menu1-2'),
                    meta: { 'title': '菜单1-2' },
                }]
            },
            {
                path: 'menu2',
                component: Menu2,
                meta: { 'title': '菜单2' },
            }

        ]
    }

]
const router = new VueRouter({ routes })
var whiteList = ['/login']
router.beforeEach((to, from, next) => {
    const hasToken = getToken();
    if (whiteList.indexOf(to.path) !== -1) {
        next();
    }
    if (hasToken) {
        next()
    }
    else {
        next('/login')
    }
})
export default router