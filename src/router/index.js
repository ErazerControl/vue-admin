import Login from "../views/login.vue"
import Index from "../views/index.vue"
import Layout from "../layout/index.vue"
import Table from "../views/example/Table"
import Tree from "../views/example/Tree"

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