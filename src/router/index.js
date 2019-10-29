import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: "/home/about",
    meta: {
      breadCrumbName: '首页'
    },
    children: [{
        path: "about",
        component: About,
        name: "about",
        meta: {
          breadCrumbName: '全部项目'
        }
      },
        
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
