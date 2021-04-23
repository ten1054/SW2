import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login.vue'),
    meta:{
      title:'登录'
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/HelloWorld'),
    meta:{
      title:'首页'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
